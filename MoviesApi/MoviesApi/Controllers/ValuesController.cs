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

        // details read
        [HttpGet]
        public IHttpActionResult Get(string option, string userString)
        {
            Movies movie = new Movies();
            if (option == "Title")
            {
                movie = db.Movies.First(m => m.Title == userString);
            }
            else if (option == "Genre")
            {
                movie = db.Movies.First(m => m.Genre == userString);
            }
            else if (option == "Director Name")
            {
                movie = db.Movies.First(m => m.DirectorName == userString);
            }

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }

        // create
        [HttpPost]
        public IHttpActionResult Post([FromBody]Movies movies)
        {
            db.Movies.Add(movies);
            return Ok();
        }

        //edit update
        [HttpPut]
        public IHttpActionResult Put(int id)
        {            
            Movies movie = db.Movies.Find(id);
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        //delete
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            Movies movie = db.Movies.Find(id);
            db.Movies.Remove(movie);
            //db.SaveChanges(); is necessary to save?

            return Ok();
        }
    }
}