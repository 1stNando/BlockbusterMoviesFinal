using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace BlockbusterMoviesFinal.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Provide your name.")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Provide your email.")]
        public string Email { get; set; }

        [JsonIgnore]
        // This property is meant to store the user's hashed password, not the plain text password.
        public string HashedPassword { get; set; }

        // The Password property is defined with only a set accessor, meaning you can assign a value to it, but you cannot retrieve a value from it. This is a security measure to prevent the plain text password from being accessible. Example of a virtual property. 
        public string Password
        {
            // Define only the `set` only aspect of the property
            set
            {
                // When set, use the PasswordHasher to encrypt the password
                // and store the result in our HashedPassword
                this.HashedPassword = new PasswordHasher<User>().HashPassword(this, value);
            }
        }

        // Add a method that can validate this user's password
        public bool IsValidPassword(string password)
        {
            // Look to see if this password, and user's hashed can match
            var passwordVerification = new PasswordHasher<User>().
            VerifyHashedPassword(this, this.HashedPassword, password);

            // Return TRUE if the verification was success. If wrong then false. 
            return passwordVerification == PasswordVerificationResult.Success;
        }
    }
}