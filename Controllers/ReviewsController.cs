using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlockbusterMoviesFinal.Models;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Collections.Generic;

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
        public async Task<ActionResult<Review>> PostReview(Review review)
        {
            // Indicate to the database context we want to add this new record
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetReview", new { id = review.Id }, review);
        }



    }
}
