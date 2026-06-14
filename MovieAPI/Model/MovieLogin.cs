using System.ComponentModel.DataAnnotations;

namespace MovieAPI.Model
{
    public class MovieLogin
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage ="UserName is required")]
        [MaxLength(50)]
        public String Username { get; set; }

        [Required(ErrorMessage ="Password is required")]
        [MaxLength(50)]
        public string Password { get; set; }
    }
}
