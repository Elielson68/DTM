using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTMBackend.Models
{
    public class User
    {
        public int id {get; set;}
        public string Name { get; set; }
        public string Email { get; set; }
        public string RegisteredNumber { get; set; }
        public string Password { get; set; }
    }
}
