using BackendApp.Models;

namespace BackendApp.Services
{
    public interface ICompanyServices
    {
        Task<IEnumerable<Company>> GetAllAsync();
        Task<Company> GetByID(string id);
        Task CreateAsync(Company company);
        Task UpdateAsync(string id, Company company);
        Task DeleteAsync(string id);
    }
}