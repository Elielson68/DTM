using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTMBackend.Models
{
    [Table("patient")]
    public class Patient
    {
        [Key]
        public int id {get; set;}
        [Required]
        [MaxLength(100, ErrorMessage = "Número de caracteres excedeu o limite permitido. Máximo de caracteres: 300")]
        public string Name { get; set; }
        [Required]
        [MaxLength(100, ErrorMessage = "Número de caracteres excedeu o limite permitido. Máximo de caracteres: 300")]
        public string Email { get; set; }
        [Required]
        [MaxLength(100, ErrorMessage = "Número de caracteres excedeu o limite permitido. Máximo de caracteres: 300")]
        public string Age { get; set; }
        [Required]
        [MaxLength(100, ErrorMessage = "Número de caracteres excedeu o limite permitido. Máximo de caracteres: 300")]
        public string Phone { get; set; }
        [Required]
        [MaxLength(100, ErrorMessage = "Número de caracteres excedeu o limite permitido. Máximo de caracteres: 300")]
        public string PainChoice { get; set; }
        [Required]
        public double InitialDistance {get; set;}
    }
}
