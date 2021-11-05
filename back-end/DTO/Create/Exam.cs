using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using static DTMBackend.DTO.Create.Patient;

namespace DTMBackend.DTO.Create
{
    public class Exam
    {
        public Exam(int id, string date, double open, double shut, double result, int patient_id, int user_id)
        {
            ExamId = id;
            Date = date;
            OpenMeasurementPx = open;
            ShutMeasurementPx = shut;
            ResultMeasurementCm = result;
            PatientId = patient_id;
            UsersId = user_id;
        }
        public int ExamId { get; set; }

        [Required(ErrorMessage = "Campo Date não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Date excedeu o limite permitido. Máximo de caracteres: 300")]
        public string Date { get; set; }

        [Required(ErrorMessage = "Campo OpenMeasurementPx não pode estar vazio.")]
        public double OpenMeasurementPx { get; set; }

        [Required(ErrorMessage = "Campo ShutMeasurementPx não pode estar vazio.")]
        public double ShutMeasurementPx { get; set; }

        [Required(ErrorMessage = "Campo ResultMeasurementCm não pode estar vazio.")]
        public double ResultMeasurementCm { get; set; }

        [Required(ErrorMessage = "Campo PatientId não pode estar vazio.")]
        public int PatientId { get; set; }
        
        [Required(ErrorMessage = "Campo UsersId não pode estar vazio.")]
        public int UsersId { get; set; }
    }
}
