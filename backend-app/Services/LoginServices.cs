using BackendApp.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BackendApp.Services
{
    public class LoginServices:ILoginServices
    {
        private readonly IMongoCollection<User> _users;
        private readonly IOptions<DatabaseSettings> _dbSettings;


        public LoginServices(IOptions<DatabaseSettings> dbSettings)
        {
            var mongoClient = new MongoClient(dbSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
            _users = mongoDatabase.GetCollection<User>(dbSettings.Value.UsersCollectionName);

        }

        public async Task<User> AuthenticateUser(string username, string password)
        {
            // Here you would ideally hash the password and compare it with the hashed password stored in db
            var user = await _users.Find(u => u.Username == username && u.Password == password).FirstOrDefaultAsync();
            return user;
        }

        public async Task<User> CreateUser(User newUser)
        {
            await _users.InsertOneAsync(newUser);
            return newUser;
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _users.Find(_ => true).ToListAsync();
        }
    }
}
