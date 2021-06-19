using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DTMBackend.Models
{
    public class AppDtmContext: DbContext
    {
        public AppDtmContext(DbContextOptions<AppDtmContext> options):base(options)
        {
        }
        public DbSet<Patient> Patient { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<Exam> Exam { get; set; }
    }
}
