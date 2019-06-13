using MoviesApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MoviesApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [AllowCrossSite]
    public class ValuesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        public IHttpActionResult Get()
        {
            List<Movies> movieList = db.Movies.ToList();
            return Ok(movieList);
        }

        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            Movies movie = db.Movies.Find(id);
            return Ok(movie);
        }

        // create
        [HttpPost]
        public IHttpActionResult Post([FromBody]Movies newMovie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data.");
            }
            var movie = new Movies();
            movie.Title = newMovie.Title;
            movie.Genre = newMovie.Genre;
            movie.DirectorName = newMovie.DirectorName;
            db.Movies.Add(movie);
            db.SaveChanges();

            return Ok();
        }

        //edit update
        [HttpPut]
        public IHttpActionResult Put(int id, [FromBody]Movies editMovie)
        {
            Movies movie = db.Movies.Find(id);
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data.");
            }
            movie.Title = editMovie.Title;
            movie.Genre = editMovie.Genre;
            movie.DirectorName = editMovie.DirectorName;
            db.SaveChanges();

            return Ok();
        }
    }
}