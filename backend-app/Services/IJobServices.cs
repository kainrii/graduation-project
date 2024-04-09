using BackendApp.Models;

namespace BackendApp.Services
{
    public interface IJobServices
    {
        Task<IEnumerable<Job>> GetAllAsync();
        Task<Job> GetByID(string _companyId, string _jobId);
        Task CreateAsync(Job job);
        Task UpdateAsync(string _companyId, string _jobId, Job job);
        Task DeleteAsync(string _companyId, string _jobId);
    }
}