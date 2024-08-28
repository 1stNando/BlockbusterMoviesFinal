using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlockbusterMoviesFinal.Models;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace BlockbusterMoviesFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ReviewsController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<Review>> PostReview(Review review)
        {
            // Security step to ensure what user id is being sent from the client. 
            review.UserId = GetCurrentUserId();

            if (review == null)
            {
                return BadRequest("Review cannot be null.");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                // Indicate to the database context we want to add this new record
                _context.Reviews.Add(review);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error creating the review: {ex.Message}");
            }


            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetReview", new { id = review.Id }, review);
        }

        // Private helper method to get the JWT claim related to the use Id for posting reviews. 
        private int GetCurrentUserId()
        {
            // Get the User Id from the claim(payload of bearer) and parse it from a string to integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }

    }
}
