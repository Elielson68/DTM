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
        public DbSet<PatientDb> Patient { get; set; }
        public DbSet<UsersDb> Users { get; set; }
        public DbSet<ExamDb> Exam { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<PatientDb>()
                .HasMany(pt => pt.Exams)
                .WithOne(p => p.Patient)
                .HasForeignKey(pt => pt.PatientId);

            modelBuilder.Entity<PatientDb>()
                .Navigation(b => b.Exams)
                .UsePropertyAccessMode(PropertyAccessMode.Property);

            modelBuilder.Entity<UsersDb>()
                .HasMany(pt => pt.Exams)
                .WithOne(t => t.Users)
                .HasForeignKey(pt => pt.UsersId);

            modelBuilder.Entity<UsersDb>()
                .Navigation(b => b.Exams)
                .UsePropertyAccessMode(PropertyAccessMode.Property);
        }
    }
}
