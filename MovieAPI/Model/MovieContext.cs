using Microsoft.EntityFrameworkCore;
using MovieAPI.Model;

namespace MovieAPI.Models
{
    public class MovieContext : DbContext
    {
        public MovieContext(DbContextOptions<MovieContext> options)
            : base(options)
        {
        }

        public DbSet<MovieList> Movies { get; set; }
        public DbSet<MovieLogin> MoviesLogin { get; set; }
    }
}