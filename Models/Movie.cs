using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using BlockbusterMoviesFinal.Models;


namespace BlockbusterMoviesFinal.Models
{
    public class Movie
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "You must provide a director.")]
        public string Director { get; set; }

        [Required(ErrorMessage = "You must provide a genre.")]
        public string Genre { get; set; }

        [Required(ErrorMessage = "You must provide the name of the movie.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "You must provide a release date.")]
        public string ReleaseDate { get; set; }

    }
}