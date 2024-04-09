using BackendApp.Services;
using BackendApp.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendApp.Controllers.CompanyControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyServices _companyServices;

        public CompanyController(ICompanyServices companyServices)
        {
            _companyServices = companyServices;

        }
        // GET: api/Company
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var companies = await _companyServices.GetAllAsync();
            return Ok(companies);
        }

        // GET api/CompanyController/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var company = await _companyServices.GetByID(id);
            if (company == null)
            {
                return NotFound();
            }
            return Ok(company);
        }

        // POST api/CompanyController
        [HttpPost]
        public async Task<IActionResult> Post(Company company)
        {
            await _companyServices.CreateAsync(company);
            return Ok("created Successfully");
        }

        // PUT api/CompanyController/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Company newCompany)
        {
            var company = await _companyServices.GetByID(id);
            if (company == null)
            {
                return NotFound();
            }
            await _companyServices.UpdateAsync(id, newCompany);

            return Ok("updated Successfully");
        }

        // DELETE api/CompanyController/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var company = await _companyServices.GetByID(id);
            if (company == null)
            {
                return NotFound();
            }
            await _companyServices.DeleteAsync(id);
            return Ok("deleted successfully");
        }
    }
}
