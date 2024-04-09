using BackendApp.Models;

namespace BackendApp.Services
{
    public interface ITalentServices
    {
        Task<IEnumerable<Talent>> GetAllAsync();
        Task<Talent> GetByID(string id);
        Task CreateAsync(Talent talent);
        Task UpdateAsync(string id, Talent talent);
        Task DeleteAsync(string id);
    }
}