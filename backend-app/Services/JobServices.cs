using MongoDB.Driver;
using BackendApp.Models;
using Microsoft.Extensions.Options;
using System.ComponentModel.Design;

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

        public async Task<IEnumerable<Job>> GetAllAsync()
        {
            var jobs = await _jobCollection.Find(_ => true).ToListAsync();
            return (IEnumerable<Job>)jobs;
        }

        //public async Task<IEnumerable<Job>> GetAllAsync() =>
        // await _jobCollection.Find(_ => true).ToListAsync();
        public async Task<Job> GetByID(string _id) =>
            await _jobCollection.Find(a => a.JobId == _id).FirstOrDefaultAsync();
        public async Task<List<Job>> GetByCompanyID(string _companyId)
        {
            // Define a filter to get jobs by the company ID
            var filter = Builders<Job>.Filter.Eq(job => job.CompanyId, _companyId);

            // Execute the find operation asynchronously
            var result = await _jobCollection.FindAsync(filter);

            // Retrieve the jobs from the result
            return await result.ToListAsync();
        }
        public async Task CreateAsync(Job job) =>
            await _jobCollection.InsertOneAsync(job);
        public async Task UpdateAsync(string _id,Job job) =>
            await _jobCollection.ReplaceOneAsync(a => a.JobId == _id, job);
        public async Task DeleteAsync(string _id) =>
            await _jobCollection.DeleteOneAsync(a => a.JobId == _id);

    }
}
