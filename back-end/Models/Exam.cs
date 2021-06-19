using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTMBackend.Models
{
    [Table("exam")]
    public class Exam
    {
        [Key]
        public int id {get; set;}
        [Required]
        [MaxLength(100, ErrorMessage = "Número de caracteres excedeu o limite permitido. Máximo de caracteres: 300")]
        public string Date { get; set; }
        [Required]
        public double OpenMeasurementPx { get; set; }
        [Required]
        public double ShutMeasurementPx  { get; set; }
        [Required]
        public double ResultMeasurementCm { get; set; }
    }
}
