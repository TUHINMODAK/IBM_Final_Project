using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MovieAPI.Model;
using MovieAPI.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly MovieContext movieContext;
        private readonly IConfiguration config;

        public AuthenticationController(
            MovieContext context,
            IConfiguration configuration)
        {
            movieContext = context;
            config = configuration;
        }

        [HttpPost]
        public IActionResult Login(UserLogin lg)
        {
            if (ModelState.IsValid)
            {
                var user = movieContext.MoviesLogin
                    .FirstOrDefault(x =>
                        x.Username == lg.UserName &&
                        x.Password == lg.Password);

                if (user != null)
                {
                    var claims = new[]
                    {
                        new Claim(
                            ClaimTypes.Name,
                            user.Username),

                        new Claim(
                            ClaimTypes.NameIdentifier,
                            user.Id.ToString())
                    };

                    var key = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(
                            config["jwt:key"]));

                    var cred = new SigningCredentials(
                        key,
                        SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(
                        issuer: config["jwt:Issuer"],
                        audience: config["jwt:Audiance"],
                        claims: claims,
                        expires: DateTime.Now.AddHours(1),
                        signingCredentials: cred
                    );

                    var usertoken =
                        new JwtSecurityTokenHandler()
                        .WriteToken(token);

                    return StatusCode(200, new
                    {
                        message = "Login Successful",
                        token = usertoken
                    });
                }

                return Unauthorized(new
                {
                    message = "Invalid Username or Password"
                });
            }

            return BadRequest(ModelState);
        }
    }
}