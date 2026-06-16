using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieAPI.Model;
using MovieAPI.Models;

namespace MovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieListController : ControllerBase
    {
        private readonly MovieContext _context;

        public MovieListController(MovieContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("AddMovie")]
        [Authorize]
        public IActionResult AddMovie(MovieList movie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    message = "Invalid Input"
                });
            }

            try
            {
                _context.Movies.Add(movie);
                _context.SaveChanges();

                return Created("", new
                {
                    message = "Movie added successfully.",
                    data = movie
                });
            }
            catch (DbUpdateException)
            {
                return Conflict(new
                {
                    message = "Movie already exists."
                });
            }
        }

        

        [HttpGet]
        [Route("getMovieById/{id}")]
        public async Task<IActionResult> GetMovieById(int id)
        {
             
            if (id > 0)
            {
                var movie = _context.Movies.Find(id);
                if (movie != null)
                {
                    return Ok(new
                    {
                        message = "Movie found",
                        data = movie
                    });
                }
                else
                {
                    return NotFound(new
                    {
                        message = $"Movie with Id {id} not found"
                    });

                }
            }
            return StatusCode(400, new { message = "Id is required" });
        }

        [HttpPut]
        [Authorize]
        [Route("updateMovieById/{id}")]
        public IActionResult UpdateMovieById([FromRoute] int id, [FromBody]  MovieList movie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    message = "Invalid Input"
                });
            }

            if (id > 0)
            {
                var moviesobj = _context.Movies.Find(id);
                if (moviesobj != null)
                {
                    moviesobj.Poster_Link = movie.Poster_Link;
                    moviesobj.Director = movie.Director;
                    moviesobj.Overview = movie.Overview;
                    moviesobj.Genre = movie.Genre;
                    moviesobj.No_of_Votes = movie.No_of_Votes;
                    moviesobj.Certificate = movie.Certificate;
                    moviesobj.IMDB_Rating = movie.IMDB_Rating;
                    moviesobj.Released_Year = movie.Released_Year;
                    moviesobj.Series_Title = movie.Series_Title;
                    int row = _context.SaveChanges();
                    if (row > 0)
                    {
                        return Ok(new
                        {
                            message = "Movie updated successfully",
                            data = movie
                        });
                    }
                    else
                    {
                        return StatusCode(500, new
                        {
                            message = "Failed to update movie"
                        });
                    }
                }
                else
                {
                    return NotFound(new
                    {
                        message = $"Movie with Id {id} not found"
                    });
                }
                
            }
            return StatusCode(400, new { message = "Id is required" });
           
        }

        [HttpDelete]
        [Authorize]
        [Route("DeleteMovie/{id}")]
        public IActionResult DeleteMovie(int id)
        {
            var movie = _context.Movies.Find(id);

            if (movie == null)
            {
                return NotFound(new
                {
                    message = $"Movie with Id {id} not found"
                });
            }

            _context.Movies.Remove(movie);
            int rows = _context.SaveChanges();

            if (rows > 0)
            {
                return Ok(new
                {
                    message = "Movie deleted successfully"
                });
            }

            return StatusCode(500, new
            {
                message = "Failed to delete movie"
            });
        }

        [HttpGet]
        [Route("searchMovie")]
        public async Task<IActionResult> Search(string term)
        {
            if (string.IsNullOrWhiteSpace(term))
            {
                var allMovies = await _context.Movies.ToListAsync();

                return Ok(new
                {
                    message = "All movies",
                    data = allMovies
                });
            }

            var movies = await _context.Movies
                .Where(m => m.Series_Title.ToLower().Contains(term.ToLower()))
                .ToListAsync();

            if (movies.Any())
            {
                return Ok(new
                {
                    message = "Movie found",
                    data = movies
                });
            }

            return NotFound(new
            {
                message = "No movies found"
            });
        }


        [HttpGet]
        [Route("movies")]
        public async Task<IActionResult> GetMovies(
    [FromQuery] int pageNum = 1,
    [FromQuery] int numOfData = 12,
    [FromQuery] string? genre = null,
    [FromQuery] int? year = null,
    [FromQuery] double? rating = null,
    [FromQuery] string? search = null,
    [FromQuery] string? certificate = null)
        {
            if (pageNum < 1) pageNum = 1;
            if (numOfData < 1) numOfData = 12;

            var query = _context.Movies.AsQueryable();

            if (!string.IsNullOrEmpty(genre))
            {
                query = query.Where(m =>
                    m.Genre.ToLower().Contains(genre.ToLower()));
            }

            if (year.HasValue)
            {
                query = query.Where(m => m.Released_Year == year);
            }

            if (rating.HasValue)
            {
                query = query.Where(m => m.IMDB_Rating >= rating);
            }

            if (!string.IsNullOrEmpty(certificate))
            {
                query = query.Where(m =>
                    m.Certificate != null &&
                    m.Certificate.Trim().ToLower().Contains(certificate.Trim().ToLower()));
            }
            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(m =>
                    m.Series_Title.ToLower().Contains(search.ToLower()));
            }


            int totalRecords = await query.CountAsync();

          
            var movies = await query
                .Skip((pageNum - 1) * numOfData)
                .Take(numOfData)
                .ToListAsync();

            return Ok(new
            {
                pageNumber = pageNum,
                pageSize = numOfData,
                totalRecords,
                totalPages = (int)Math.Ceiling((double)totalRecords / numOfData),
                count = movies.Count,
                data = movies
            });
        }

    }
}
