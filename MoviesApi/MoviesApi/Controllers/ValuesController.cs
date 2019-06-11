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
        ApplicationDbContext context;

        [HttpGet]
        public IHttpActionResult Get()
        {
            List<Models.Movies> movieList = new List<Models.Movies>();
            context.Movies.AddOrUpdate(
            new Models.Movies { Title = "The Departed", Genre = "Drama", DirectorName = "Martin Scorsese" },
            new Models.Movies { Title = "The Dark Knight", Genre = "Drama", DirectorName = "Christopher Nolan" },
            new Models.Movies { Title = "Inception", Genre = "Drama", DirectorName = "Christopher Nolan" },
            new Models.Movies { Title = "Pineapple Express", Genre = "Comedy", DirectorName = "David Gordon Green" },
            new Models.Movies { Title = "Die Hard", Genre = "Action", DirectorName = "John McTiernan" });
            return Ok(movieList);
        }

        //[HttpGet]
        //public IEnumerable<Models.Movies> Get()
        //{
        //    List<Models.Movies> movieList = new List<Models.Movies>();
        //    context.Movies.AddOrUpdate(
        //    new Models.Movies { Title = "The Departed", Genre = "Drama", DirectorName = "Martin Scorsese" },
        //    new Models.Movies { Title = "The Dark Knight", Genre = "Drama", DirectorName = "Christopher Nolan" },
        //    new Models.Movies { Title = "Inception", Genre = "Drama", DirectorName = "Christopher Nolan" },
        //    new Models.Movies { Title = "Pineapple Express", Genre = "Comedy", DirectorName = "David Gordon Green" },
        //    new Models.Movies { Title = "Die Hard", Genre = "Action", DirectorName = "John McTiernan" }
        //    return movieList;
        //}

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
