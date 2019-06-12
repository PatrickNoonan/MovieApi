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


        // details read
        //[HttpGet]
        //public IHttpActionResult Get(string option, string userString)
        //{
        //    Movies movie = new Movies();
        //    if (option == "Title")
        //    {
        //        movie = db.Movies.First(m => m.Title == userString);
        //    }
        //    else if (option == "Genre")
        //    {
        //        movie = db.Movies.First(m => m.Genre == userString);
        //    }
        //    else if (option == "Director Name")
        //    {
        //        movie = db.Movies.First(m => m.DirectorName == userString);
        //    }

        //    if (movie == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(movie);
        //}

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
        public IHttpActionResult Put(int id, [FromBody] Movies movies)
        {            
            Movies movie = db.Movies.Find(id);
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        //[HttpPut]
        //public IHttpActionResult Put([Bind(Include = "Id,firstName,lastName,emailAddress,address,zipCode,weeklyPickupDay,specialOneTimePickup")] Customer customer)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Entry(customer).State = EntityState.Modified;
        //        string currentId = User.Identity.GetUserId();
        //        customer.UserId = currentId;
        //        db.SaveChanges();

        //        return RedirectToAction("Index");
        //    }
        //    return View(customer);
        //}

        //delete
        //[HttpDelete]
        //public IHttpActionResult Delete(int id)
        //{
        //    Movies movie = db.Movies.Find(id);
        //    db.Movies.Remove(movie);
        //    //db.SaveChanges(); is necessary to save?

        //    return Ok();
        //}
    }
}