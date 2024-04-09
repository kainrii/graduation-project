using BackendApp.Services;
using BackendApp.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendApp.Controllers.TalentControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TalentController : ControllerBase
    {
        private readonly ITalentServices _talentServices;

        public TalentController(ITalentServices talentServices)
        {
            _talentServices = talentServices;

        }
        // GET: api/talent
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var companies = await _talentServices.GetAllAsync();
            return Ok(companies);
        }

        // GET api/talentController/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var talent = await _talentServices.GetByID(id);
            if (talent == null)
            {
                return NotFound();
            }
            return Ok(talent);
        }

        // POST api/talentController
        [HttpPost]
        public async Task<IActionResult> Post(Talent talent)
        {
            await _talentServices.CreateAsync(talent);
            return Ok("created Successfully");
        }

        // PUT api/talentController/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Talent newTalent)
        {
            var talent = await _talentServices.GetByID(id);
            if (talent == null)
            {
                return NotFound();
            }
            await _talentServices.UpdateAsync(id, newTalent);

            return Ok("updated Successfully");
        }

        // DELETE api/TalentController/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var Talent = await _talentServices.GetByID(id);
            if (Talent == null)
            {
                return NotFound();
            }
            await _talentServices.DeleteAsync(id);
            return Ok("deleted successfully");
        }
    }
}
