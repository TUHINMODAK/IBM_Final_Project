using System.ComponentModel.DataAnnotations;

namespace MovieAPI.Model
{
    public class MovieList
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Poster_Link { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Series_Title { get; set; } = string.Empty;

        [Required]
        public int Released_Year { get; set; }

        [MaxLength(50)]
        public string? Certificate { get; set; }

        [Required]
        [MaxLength(50)]
        public string Runtime { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Genre { get; set; } = string.Empty;

        public double? IMDB_Rating { get; set; }

        [Required]
        public string Overview { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Director { get; set; } = string.Empty;

        [Required]
        public int No_of_Votes { get; set; }
    }
}
