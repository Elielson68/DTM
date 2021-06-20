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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Patient>()
                .HasMany(pt => pt.Exams)
                .WithOne(p => p.Patient)
                .HasForeignKey(pt => pt.PatientId);

            modelBuilder.Entity<Patient>()
                .Navigation(b => b.Exams)
                .UsePropertyAccessMode(PropertyAccessMode.Property);

            modelBuilder.Entity<Users>()
                .HasMany(pt => pt.Exams)
                .WithOne(t => t.Users)
                .HasForeignKey(pt => pt.UsersId);

            modelBuilder.Entity<Users>()
                .Navigation(b => b.Exams)
                .UsePropertyAccessMode(PropertyAccessMode.Property);
        }
    }
}
