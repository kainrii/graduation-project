using BackendApp.Models;


namespace BackendApp.Services
{
    public interface ITalentProfileServices
    {
        Task<IEnumerable<TalentProfile>> GetAllTalentProfilesAsync();
        Task<TalentProfile> GetTalentProfileByIdAsync(string id);
        Task<TalentProfile> CreateTalentProfileAsync(TalentProfile talentProfile);
        Task UpdateTalentProfileAsync(string id, TalentProfile talentProfile);
        Task UpdatePersonalDetailsAsync(string id, PersonalDetails personalDetails);
        Task UpdateBackgroundAsync(string id, Background background);
        Task UpdateITSkillsAsync(string id, ITSkills iTSkills);
        Task UpdatePreferencesAsync(string id, Preferences preferences);

        Task DeleteTalentProfileAsync(string id);

    }
}