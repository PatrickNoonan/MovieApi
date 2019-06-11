using MoviesApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoviesApi.Controllers
{
    [Authorize]
    public class ValuesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        public IHttpActionResult Get()
        {
            List<Movies> movieList = new List<Movies>();
            db.Movies.AddOrUpdate(
            new Movies { Title = "The Departed", Genre = "Drama", DirectorName = "Martin Scorsese" },
            new Movies { Title = "The Dark Knight", Genre = "Drama", DirectorName = "Christopher Nolan" },
            new Movies { Title = "Inception", Genre = "Drama", DirectorName = "Christopher Nolan" },
            new Movies { Title = "Pineapple Express", Genre = "Comedy", DirectorName = "David Gordon Green" },
            new Movies { Title = "Die Hard", Genre = "Action", DirectorName = "John McTiernan" }
            );
            db.SaveChanges();

            return Ok(1);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
