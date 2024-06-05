using MongoDB.Driver;
using BackendApp.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;

namespace BackendApp.Services
{
    public class TalentProfileServices : ITalentProfileServices
    {
        private readonly IMongoCollection<TalentProfile> _talentProfileCollection;
        private readonly IOptions<DatabaseSettings> _dbSettings;

        public TalentProfileServices(IOptions<DatabaseSettings> dbSettings)
        {
            _dbSettings = dbSettings;
            var mongoClient = new MongoClient(dbSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
            _talentProfileCollection = mongoDatabase.GetCollection<TalentProfile>(dbSettings.Value.TalentProfileCollectionName);
        }

        public async Task<IEnumerable<TalentProfile>> GetAllTalentProfilesAsync()
        {
            return await _talentProfileCollection.Find(_ => true).ToListAsync();
        }

        public async Task<TalentProfile> GetTalentProfileByIdAsync(string id)
        {
            return await _talentProfileCollection.Find(a => a.Id == id).FirstOrDefaultAsync();
        }

        public async Task<TalentProfile> CreateTalentProfileAsync(TalentProfile talentProfile)
        {
            if (talentProfile.Id == null)
            {
                // Generate a new ObjectId for the talent profile if it doesn't already have one
                talentProfile.Id = ObjectId.GenerateNewId().ToString();
            }

            await _talentProfileCollection.InsertOneAsync(talentProfile);
            return talentProfile;
        }

        public async Task UpdateTalentProfileAsync(string id, TalentProfile talentProfile)
        {
            await _talentProfileCollection.ReplaceOneAsync(a => a.Id == id, talentProfile);
        }

        public async Task UpdatePersonalDetailsAsync(string id, PersonalDetails personalDetails)
        {
            var filter = Builders<TalentProfile>.Filter.Eq(p => p.Id, id);
            var update = Builders<TalentProfile>.Update.Set(p => p.PersonalDetails, personalDetails);
            await _talentProfileCollection.UpdateOneAsync(filter, update);
        }

        public async Task UpdateBackgroundAsync(string id, Background background)
        {
            var filter = Builders<TalentProfile>.Filter.Eq(p => p.Id, id);
            var update = Builders<TalentProfile>.Update.Set(p => p.Background, background);
            await _talentProfileCollection.UpdateOneAsync(filter, update);
        }

        public async Task UpdateITSkillsAsync(string id, ITSkills iTSkills)
        {
            var filter = Builders<TalentProfile>.Filter.Eq(p => p.Id, id);
            var update = Builders<TalentProfile>.Update.Set(p => p.ITSkills, iTSkills);
            await _talentProfileCollection.UpdateOneAsync(filter, update);
        }

        public async Task UpdatePreferencesAsync(string id, Preferences preferences)
        {
            var filter = Builders<TalentProfile>.Filter.Eq(p => p.Id, id);
            var update = Builders<TalentProfile>.Update.Set(p => p.Preferences, preferences);
            await _talentProfileCollection.UpdateOneAsync(filter, update);
        }

        public async Task DeleteTalentProfileAsync(string id)
        {
            await _talentProfileCollection.DeleteOneAsync(a => a.Id == id);
        }
    }
}