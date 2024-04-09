using MongoDB.Driver;
using BackendApp.Models;
using Microsoft.Extensions.Options;

namespace BackendApp.Services
{
    public class JobServices : IJobServices
    {
        private readonly IMongoCollection<Job> _jobCollection;
        private readonly IOptions<DatabaseSettings> _dbSettings;

        public JobServices(IOptions<DatabaseSettings> dbSettings)
        {
            _dbSettings = dbSettings;
            var mongoClient = new MongoClient(dbSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
            _jobCollection = mongoDatabase.GetCollection<Job>(dbSettings.Value.JobsCollectionName);

        }

        /*        public async Task<IEnumerable<Company>> GetAllAsync()
                {
                    var companies = _categoryCollection.Find(_ => true).ToListAsync();
                    return companies;
                }*/

        public async Task<IEnumerable<Job>> GetAllAsync() =>
            await _jobCollection.Find(_ => true).ToListAsync();
        public async Task<Job> GetByID(string _companyId, string _jobId) =>
            await _jobCollection.Find(a => a.CompanyId == _companyId && a.JobId == _jobId).FirstOrDefaultAsync();
        public async Task CreateAsync(Job job) =>
            await _jobCollection.InsertOneAsync(job);
        public async Task UpdateAsync(string _companyId, string _jobId, Job job) =>
            await _jobCollection.ReplaceOneAsync(a => a.CompanyId == _companyId && a.JobId == _jobId, job);
        public async Task DeleteAsync(string _companyId, string _jobId) =>
            await _jobCollection.DeleteOneAsync(a => a.CompanyId == _companyId && a.JobId == _jobId);

    }
}
