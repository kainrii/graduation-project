using BackendApp.Models;

namespace BackendApp.Services
{
    public interface IJobServices
    {
        Task<IEnumerable<Job>> GetAllAsync();
        Task<Job> GetByID(string _id);
        Task<List<Job>> GetByCompanyID(string _companyId);
        Task CreateAsync(Job job);
        Task UpdateAsync(string _id, Job job);
        Task DeleteAsync(string _id);
    }
}