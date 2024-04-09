using BackendApp.Services;
using BackendApp.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.ComponentModel.Design;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendApp.Controllers.CompanyControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly IJobServices _jobServices;
        public JobController(IJobServices jobServices)
        {
            _jobServices = jobServices;

        }
        // GET: api/<JobController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var jobs = await _jobServices.GetAllAsync();
            return Ok(jobs);
        }

        // GET api/<JobController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string companyId, string jobId)
        {
            var job = await _jobServices.GetByID(companyId, jobId);
            if (job == null)
            {
                return NotFound();
            }
            return Ok(job);
        }

        // POST api/<JobController>
        [HttpPost]
        public async Task<IActionResult> Post(Job job)
        {
            await _jobServices.CreateAsync(job);
            return Ok("created Successfully");
        }

        // PUT api/<JobController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string companyId, string jobId, [FromBody] Job newJob)
        {
            var company = await _jobServices.GetByID(companyId, jobId);
            if (company == null)
            {
                return NotFound();
            }
            await _jobServices.UpdateAsync(companyId, jobId, newJob);

            return Ok("updated Successfully");
        }

        // DELETE api/<JobController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string companyId, string jobId)
        {
            var company = await _jobServices.GetByID(companyId, jobId);
            if (company == null)
            {
                return NotFound();
            }
            await _jobServices.DeleteAsync(companyId, jobId);
            return Ok("deleted successfully");
        }
    }
}
