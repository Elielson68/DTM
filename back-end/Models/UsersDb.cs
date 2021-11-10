using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DTMBackend.DTO;
namespace DTMBackend.Models
{
    [Table("users")]
    public class UsersDb
    {
        public UsersDb()
        {

        }
        public UsersDb(DTO.Create.Users user)
        {
            Name = user.Name;
            Email = user.Email;
            RegisteredNumber = user.RegisteredNumber;
            Password = user.Password;
        }
        [Key]
        public int UsersId {get; set;}
        
        public string Name { get; set; }
        
        public string Email { get; set; }
        
        public long RegisteredNumber { get; set; }
        
        public string Password { get; set; }

        public List<ExamDb> Exams { get; set; }
    }
}
