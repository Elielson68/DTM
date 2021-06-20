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
        
        [Required(ErrorMessage = "Campo Date não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Date excedeu o limite permitido. Máximo de caracteres: 300")]
        public string Date { get; set; }
        
        [Required(ErrorMessage = "Campo OpenMeasurementPx não pode estar vazio.")]
        public double OpenMeasurementPx { get; set; }
        
        [Required(ErrorMessage = "Campo ShutMeasurementPx não pode estar vazio.")]
        public double ShutMeasurementPx  { get; set; }
        
        [Required(ErrorMessage = "Campo ResultMeasurementCm não pode estar vazio.")]
        public double ResultMeasurementCm { get; set; }

        public Byte[] ReportOpen { get; set; }
        public Byte[] ReportShut { get; set; }

        public int PatientId { get; set; }
        public Patient Patient { get; set; }

        public int UsersId { get; set; }
        public Users Users { get; set; }



    }
}
