using BackendApp.Contexts;
using BackendApp.Models;
using BackendApp.Services;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

public class LoginServices : ILoginServices
{
    /*    private readonly IMongoCollection<User> _users;
        private readonly IConfiguration _configuration;

        public LoginServices(DatabaseContext context, IConfiguration configuration)
        {
            _users = context.Users;
            _configuration = configuration;
        }
    */

    private readonly IMongoCollection<User> _users;
    private readonly IOptions<DatabaseSettings> _dbSettings;
    private readonly IConfiguration _configuration;

    public LoginServices(IOptions<DatabaseSettings> dbSettings, IConfiguration configuration)
    {
        _dbSettings = dbSettings;
        _configuration = configuration;
        var mongoClient = new MongoClient(dbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
        _users = mongoDatabase.GetCollection<User>(dbSettings.Value.UsersCollectionName);
        _configuration = configuration;
    }

    public async Task<User> AuthenticateUser(string username, string password)
    {
        var user = await _users.Find(u => u.Username == username).FirstOrDefaultAsync();
        if (user != null && BCrypt.Net.BCrypt.Verify(password, user.Password))
            return user;
        return null;
    }

    public async Task<User> CreateUser(User newUser)
    {
        newUser.Password = BCrypt.Net.BCrypt.HashPassword(newUser.Password);

        if (_users == null)
        {
            // Handle the case where _users is null
            Console.WriteLine("_users collection is null. Make sure it is properly initialized.");
        }
        else
        {
            // Proceed with inserting the new user
            await _users.InsertOneAsync(newUser);
        }
        return newUser;
    }

    public async Task<string> GenerateJwtToken(User user)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var keyString = _configuration["JwtSettings:Key"];
        if (string.IsNullOrEmpty(keyString))
        {
            throw new InvalidOperationException("JWT Key is not set in configuration.");
        }

        var key = Encoding.ASCII.GetBytes(keyString);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(ClaimTypes.SerialNumber, user.Id)
            }),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}
