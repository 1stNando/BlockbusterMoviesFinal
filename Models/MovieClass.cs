using System;
using System.ComponentModel.DataAnnotations;

namespace BlockbusterMoviesFinal.Models
{
    public class MovieClass
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "You must provide a title.")]
        public string Title { get; set; }

        [Required(ErrorMessage = "You must provide a genre.")]
        public string Genre { get; set; }

        [Required(ErrorMessage = "You must provide a director.")]
        public string Director { get; set; }

        [Required(ErrorMessage = "You must provide a release date.")]
        [RegularExpression(@"\d{4}-\d{2}-\d{2}", ErrorMessage = "The release date must be in the format yyyy-MM-dd.")]
        public string ReleaseDate { get; set; }

    }
}