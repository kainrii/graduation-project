using BackendApp.Services;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly ILoginServices _loginService;

    public UsersController(ILoginServices loginService)
    {
        _loginService = loginService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] User loginRequest)
    {
        var user = await _loginService.AuthenticateUser(loginRequest.Username, loginRequest.Password);
        if (user == null)
            return Unauthorized("Invalid credentials");

        var token = await _loginService.GenerateJwtToken(user);
        return Ok(new { Token = token });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] User newUser)
    {
        var createdUser = await _loginService.CreateUser(newUser);
        if (createdUser == null)
            return BadRequest("User could not be created");

        var token = await _loginService.GenerateJwtToken(createdUser);
        return CreatedAtAction(nameof(Register), new { Token = token });
    }
}
