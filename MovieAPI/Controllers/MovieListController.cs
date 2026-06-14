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
        public IActionResult AddMovie(MovieList movie)
        {
            if (ModelState.IsValid)
            {
                _context.Movies.Add(movie);
                int rows = _context.SaveChanges();
                if (rows > 0)
                {
                    return StatusCode(201, new
                    {
                        message = "Data Added Successfully",
                        data = movie
                    });
                }
                else
                {
                    return StatusCode(500, new
                    {
                        message = "Something went wrong"
                    });
                }


            }
            return StatusCode(400, new
            {
                message = "Invalid Input",
                data = ModelState.ValidationState
            });
        }

        [HttpGet]
        [Route("getAllMovies")]
        public async Task<IActionResult> GetAllMovies()
        {
            var movies=await _context.Movies.ToListAsync();
            return Ok(new
            {
                message = "Data Fetched Succesfully",
                data= movies
            });
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




    }
}
