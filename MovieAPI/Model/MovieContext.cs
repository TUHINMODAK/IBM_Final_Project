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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<MovieList>()
                .HasIndex(m => new
                {
                    m.Series_Title,
                    m.Released_Year,
                    m.Director
                })
                .IsUnique();
        }
    }
}