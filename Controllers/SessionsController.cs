using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using BlockbusterMoviesFinal.Models;
using BlockbusterMoviesFinal.Utils;

namespace BlockbusterMoviesFinal.Controllers
{
    // View style model. Exists outside the database and in this case only used by this controller. The purpose is to have an object that can see the email and the password for the session we are creating. 
    public class LoginUser
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class SessionsController : ControllerBase
    {
        private readonly DatabaseContext _context;


        readonly protected string JWT_KEY;

        // Example of a dependency injection. 
        public SessionsController(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            JWT_KEY = config["JWT_KEY"];
        }

        // Create session logging in
        [HttpPost]
        public async Task<ActionResult> Login(LoginUser loginUser)
        {
            var foundUser = await _context.Users.FirstOrDefaultAsync(user => user.Email == loginUser.Email);

            if (foundUser != null && foundUser.IsValidPassword(loginUser.Password))
            {
                // Create custom response
                var response = new
                {
                    // This is new LOGIN token
                    token = new TokenGenerator(JWT_KEY).TokenFor(foundUser),

                    // This is the user details
                    user = foundUser
                };

                return Ok(response);
            }
            else
            {
                var response = new
                {
                    status = 400,
                    errors = new List<string>() { "User does not exist" }
                };

                return BadRequest(response);
            }
        }
    }
}