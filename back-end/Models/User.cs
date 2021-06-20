using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTMBackend.Models
{
    [Table("users")]
    public class Users
    {
        [Key]
        public int UsersId {get; set;}
        
        [Required(ErrorMessage = "Campo Name não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Name excedeu o limite permitido. Máximo de caracteres: 100")]
        public string Name { get; set; }
        
        [Required(ErrorMessage = "Campo Email não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Email excedeu o limite permitido. Máximo de caracteres: 100")]
        public string Email { get; set; }
        
        [Required(ErrorMessage = "Campo RegisteredNumber não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo RegisteredNumber excedeu o limite permitido. Máximo de caracteres: 100")]
        public string RegisteredNumber { get; set; }
        
        [Required(ErrorMessage = "Campo Password não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Password excedeu o limite permitido. Máximo de caracteres: 100")]
        public string Password { get; set; }

        public List<Exam> Exams { get; set; }
    }
}
