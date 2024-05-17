using BackendApp.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BackendApp.Contexts
{
    public class DatabaseContext
    {
        public IMongoCollection<User> Users { get; }
        public DatabaseContext(IConfiguration configuration)
        {
            var settings = configuration.GetSection("DatabaseSettings").Get<DatabaseSettings>();
            if (settings != null)
            {
                var client = new MongoClient(settings.ConnectionString);

                var database = client.GetDatabase(settings.DatabaseName);
                Users = database.GetCollection<User>(settings.UsersCollectionName);
                // Proceed with MongoDB operations using the client
            }
            else
            {
                Console.WriteLine("Settings object is null. Unable to connect to the database.");
            }
        }
        }
    }


