using BackendApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BackendApp.Services;

namespace BackendApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TalentProfilesController : ControllerBase
    {
        private readonly ILogger<TalentProfilesController> _logger;
        private readonly ITalentProfileServices _talentProfileService;

        public TalentProfilesController(ILogger<TalentProfilesController> logger, ITalentProfileServices talentProfileService)
        {
            _logger = logger;
            _talentProfileService = talentProfileService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTalentProfiles()
        {
            var talentProfiles = await _talentProfileService.GetAllTalentProfilesAsync();
            return Ok(talentProfiles);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTalentProfileById(string id)
        {
            var talentProfile = await _talentProfileService.GetTalentProfileByIdAsync(id);
            if (talentProfile == null)
            {
                return NotFound();
            }
            return Ok(talentProfile);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTalentProfile([FromBody] TalentProfile talentProfile)
        {
            await _talentProfileService.CreateTalentProfileAsync(talentProfile);
            return CreatedAtAction(nameof(GetTalentProfileById), new { id = talentProfile.Id }, talentProfile);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTalentProfile(string id, [FromBody] TalentProfile talentProfile)
        {
            if (id != talentProfile.Id)
            {
                return BadRequest();
            }

            await _talentProfileService.UpdateTalentProfileAsync(id, talentProfile);
            return NoContent();
        }

        [HttpPut("personal-details/{id}")]
        public async Task<IActionResult> UpdatePersonalDetails(string id, [FromBody] PersonalDetails personalDetails)
        {

            await _talentProfileService.UpdatePersonalDetailsAsync(id, personalDetails);
            return NoContent();
        }

        [HttpPut("background/{id}")]
        public async Task<IActionResult> UpdateBackground(string id, [FromBody] Background background)
        {

            await _talentProfileService.UpdateBackgroundAsync(id, background);
            return NoContent();
        }
        [HttpPut("it-skills/{id}")]
        public async Task<IActionResult> UpdateITSkills(string id, [FromBody] ITSkills iTSkills)
        {

            await _talentProfileService.UpdateITSkillsAsync(id, iTSkills);
            return NoContent();
        }

        [HttpPut("preferences/{id}")]
        public async Task<IActionResult> UpdatePreferences(string id, [FromBody] Preferences preferences)
        {

            await _talentProfileService.UpdatePreferencesAsync(id, preferences);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTalentProfile(string id)
        {
            await _talentProfileService.DeleteTalentProfileAsync(id);
            return NoContent();
        }
    }
}