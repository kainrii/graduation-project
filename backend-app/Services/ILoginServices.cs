using BackendApp.Models;
namespace BackendApp.Services
{
    public interface ILoginServices
    {
        Task<User> AuthenticateUser(string username, string password);
        Task<User> CreateUser(User newUser);
        Task<string> GenerateJwtToken(User user);

    }
}
