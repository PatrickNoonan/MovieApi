using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MovieApi.Models
{
    public class Movies
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Title")]
        public string title { get; set; }

        [Display(Name = "Genre")]
        public string genre { get; set; }

        [Display(Name = "Director Name")]

        public string director { get; set; }
    }
}