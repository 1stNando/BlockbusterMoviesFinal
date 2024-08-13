using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlockbusterMoviesFinal.Models;
using Microsoft.AspNetCore.Mvc.Filters;

namespace BlockbusterMoviesFinal.Controllers
{
    // All of these routes will be at the base URL:     /api/MovieClasses
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case MovieClassesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class MovieClassesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public MovieClassesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/MovieClasses
        //
        // Returns a list of all your MovieClasses
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieClass>>> GetMovieClasses(string filter)
        {
            // Uses the database context in `_context` to request all of the MovieClasses, sort
            // them by row id and return them as a JSON array.
            //return await _context.MovieClasses.OrderBy(row => row.Id).ToListAsync();

            // Uses the database context in `_context` to request all of the Movies, 
            // sort them by row id and return them as a JSON array.
            if (filter == null)
            {
                return await _context.MovieClasses.
                OrderBy(row => row.Id).
                Include(movie => movie.Reviews).
                ToListAsync();
            }
            else
            { // In addition we return the reviews associated with the movie. 
                return await _context.MovieClasses.
                    OrderBy(row => row.Id).
                    Where(movie => movie.Title.ToLower().Contains(filter)).
                    Include(movie => movie.Reviews).
                    ToListAsync();
            }
        }

        // GET: api/MovieClasses/5
        //
        // Fetches and returns a specific movieClass by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<MovieClass>> GetMovieClass(int id)
        {
            // Find the movieClass in the database using `FindAsync` to look it up by id
            var movieClass = await _context.MovieClasses.
            Include(movie => movie.Reviews).
            Where(movie => movie.Id == id).
            FirstOrDefaultAsync(); ;

            // If we didn't find anything, we receive a `null` in return
            if (movieClass == null)
            {
                // Return a `404` response to the client indicating we could not find a movieClass with this id
                return NotFound();
            }

            //  Return the movieClass as a JSON object.
            return movieClass;
        }

        // PUT: api/MovieClasses/5
        //
        // Update an individual movieClass with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a MovieClass
        // variable named movieClass. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our MovieClass POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovieClass(int id, MovieClass movieClass)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != movieClass.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in movieClass to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from movieClass
            _context.Entry(movieClass).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!MovieClassExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(movieClass);
        }

        // POST: api/MovieClasses
        //
        // Creates a new movieClass in the database.
        //
        // The `body` of the request is parsed and then made available to us as a MovieClass
        // variable named movieClass. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our MovieClass POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<MovieClass>> PostMovieClass(MovieClass movieClass)
        {
            // Indicate to the database context we want to add this new record
            _context.MovieClasses.Add(movieClass);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetMovieClass", new { id = movieClass.Id }, movieClass);
        }

        // DELETE: api/MovieClasses/5
        //
        // Deletes an individual movieClass with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovieClass(int id)
        {
            // Find this movieClass by looking for the specific id
            var movieClass = await _context.MovieClasses.FindAsync(id);
            if (movieClass == null)
            {
                // There wasn't a movieClass with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.MovieClasses.Remove(movieClass);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(movieClass);
        }

        // Private helper method that looks up an existing movieClass by the supplied id
        private bool MovieClassExists(int id)
        {
            return _context.MovieClasses.Any(movieClass => movieClass.Id == id);
        }
    }
}
