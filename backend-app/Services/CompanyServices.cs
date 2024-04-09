using MongoDB.Driver;
using BackendApp.Models;
using Microsoft.Extensions.Options;

namespace BackendApp.Services
{
    public class CompanyServices : ICompanyServices
    {
        private readonly IMongoCollection<Company> _categoryCollection;
        private readonly IOptions<DatabaseSettings> _dbSettings;

        public CompanyServices(IOptions<DatabaseSettings>dbSettings) {
            _dbSettings = dbSettings;
            var mongoClient = new MongoClient(dbSettings.Value.ConnectionString);
            var mongoDatabase=mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
            _categoryCollection = mongoDatabase.GetCollection<Company>(dbSettings.Value.CompaniesCollectionName);

        }

        /*        public async Task<IEnumerable<Company>> GetAllAsync()
                {
                    var companies = _categoryCollection.Find(_ => true).ToListAsync();
                    return companies;
                }*/

        public async Task<IEnumerable<Company>> GetAllAsync()=>
            await _categoryCollection.Find(_ => true).ToListAsync();
        public async Task<Company> GetByID(string id) =>
            await _categoryCollection.Find(a => a.CompanyId == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Company company) =>
            await _categoryCollection.InsertOneAsync(company);
        public async Task UpdateAsync(string id, Company company) =>
            await _categoryCollection.ReplaceOneAsync(a => a.CompanyId == company.CompanyId, company);
        public async Task DeleteAsync(string id)=>
            await _categoryCollection.DeleteOneAsync(a => a.CompanyId == id);

    }
}
