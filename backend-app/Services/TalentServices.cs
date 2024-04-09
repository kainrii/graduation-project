using MongoDB.Driver;
using BackendApp.Models;
using Microsoft.Extensions.Options;

namespace BackendApp.Services
{
    public class TalentServices : ITalentServices
    {
        private readonly IMongoCollection<Talent> _talentCollection;
        private readonly IOptions<DatabaseSettings> _dbSettings;

        public TalentServices(IOptions<DatabaseSettings> dbSettings)
        {
            _dbSettings = dbSettings;
            var mongoClient = new MongoClient(dbSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
            _talentCollection = mongoDatabase.GetCollection<Talent>(dbSettings.Value.TalentsCollectionName);

        }

        /*        public async Task<IEnumerable<Talent>> GetAllAsync()
                {
                    var companies = _talentCollection.Find(_ => true).ToListAsync();
                    return companies;
                }*/

        public async Task<IEnumerable<Talent>> GetAllAsync() =>
            await _talentCollection.Find(_ => true).ToListAsync();
        public async Task<Talent> GetByID(string id) =>
            await _talentCollection.Find(a => a.TalentId == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Talent Talent) =>
            await _talentCollection.InsertOneAsync(Talent);
        public async Task UpdateAsync(string id, Talent Talent) =>
            await _talentCollection.ReplaceOneAsync(a => a.TalentId == Talent.TalentId, Talent);
        public async Task DeleteAsync(string id) =>
            await _talentCollection.DeleteOneAsync(a => a.TalentId == id);

    }
}
