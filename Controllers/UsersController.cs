using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Filters;
using BlockbusterMoviesFinal.Models;

namespace BlockbusterMoviesFinal.Controllers
{
    // All of these routes will be at the base URL:     /api/MovieClasses
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case MovieClassesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public UsersController(DatabaseContext context)
        {
            _context = context;
        }

        // Creates a new user. 
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            // Added a catch for exception when request to post new user has duplicate email. 
            try
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetUser", new { id = user.Id }, user);
            }
            catch (Microsoft.EntityFrameworkCore.DbUpdateException)
            {
                var response = new
                {
                    status = 400,
                    errors = new List<string>() { "A user already exists with this email!" }
                };

                return BadRequest(response);
            }

        }


    }
}
