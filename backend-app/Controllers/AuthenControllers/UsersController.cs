using BackendApp.Services;
using BackendApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BackendApp.Controllers.AuthenControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ILoginServices _loginService;

        public UsersController(ILoginServices loginService) // Use the interface here
        {
            _loginService = loginService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User loginRequest)
        {
            var user = await _loginService.AuthenticateUser(loginRequest.Username, loginRequest.Password);
            if (user == null)
                return Unauthorized("Invalid credentials");

            return Ok(user); // In a real application, return only safe fields and perhaps a JWT token
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User newUser)
        {
            var createdUser = await _loginService.CreateUser(newUser);
            return CreatedAtAction(nameof(Register), new { id = createdUser.Id }, createdUser);
        }
    }
}
