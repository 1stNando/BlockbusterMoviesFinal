using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlockbusterMoviesFinal.Models;
using BlockbusterVido.Models;

namespace BlockbusterMoviesFinal.Controllers
{
    // All of these routes will be at the base URL:     /api/Movies
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case MoviesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public MoviesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Movies
        //
        // Returns a list of all your Movies
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetMovies()
        {
            // Uses the database context in `_context` to request all of the Movies, sort
            // them by row id and return them as a JSON array.
            return await _context.Movies.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Movies/5
        //
        // Fetches and returns a specific movie by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> GetMovie(int id)
        {
            // Find the movie in the database using `FindAsync` to look it up by id
            var movie = await _context.Movies.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (movie == null)
            {
                // Return a `404` response to the client indicating we could not find a movie with this id
                return NotFound();
            }

            //  Return the movie as a JSON object.
            return movie;
        }

        // PUT: api/Movies/5
        //
        // Update an individual movie with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Movie
        // variable named movie. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Movie POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie(int id, Movie movie)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != movie.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in movie to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from movie
            _context.Entry(movie).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!MovieExists(id))
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
            return Ok(movie);
        }

        // POST: api/Movies
        //
        // Creates a new movie in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Movie
        // variable named movie. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Movie POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Movie>> PostMovie(Movie movie)
        {
            // Indicate to the database context we want to add this new record
            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetMovie", new { id = movie.Id }, movie);
        }

        // DELETE: api/Movies/5
        //
        // Deletes an individual movie with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovie(int id)
        {
            // Find this movie by looking for the specific id
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null)
            {
                // There wasn't a movie with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Movies.Remove(movie);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(movie);
        }

        // Private helper method that looks up an existing movie by the supplied id
        private bool MovieExists(int id)
        {
            return _context.Movies.Any(movie => movie.Id == id);
        }
    }
}
