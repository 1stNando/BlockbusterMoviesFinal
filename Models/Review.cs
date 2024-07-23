using System;

namespace BlockbusterMoviesFinal.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public int Stars { get; set; }
        // Setting a default date for the CreatedAt and make its set method private so that it cannot be set via the API
        public DateTime CreatedAt { get; private set; } = DateTime.Now;


        // Used by the database. Defines the one-to-one relation to MovieClass 
        public int MovieClassId { get; set; }

        // Used by EntityFramework/LINQ
        public MovieClass MovieClass { get; set; }
    }
}