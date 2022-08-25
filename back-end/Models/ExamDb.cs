using DTMBackend.DTO;
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
    public class ExamDb
    {
        public ExamDb()
        {

        }
        public ExamDb(DTO.Create.Exam exam, PatientDb patient, UsersDb user)
        {
            Date = exam.Date;
            OpenMeasurementPx = exam.OpenMeasurementPx;
            ShutMeasurementPx = exam.ShutMeasurementPx;
            ResultMeasurementCm = exam.ResultMeasurementCm;
            ReportOpen = null;
            ReportShut = null;
            Patient = patient;
            Users = user;
        }

        [Key]
        public int ExamId { get; set;}
        
        public string Date { get; set; }
        
        public double OpenMeasurementPx { get; set; }
        
        public double ShutMeasurementPx  { get; set; }
        
        public double ResultMeasurementCm { get; set; }

        public Byte[] ReportOpen { get; set; }
        public Byte[] ReportShut { get; set; }

        public int PatientId { get; set; }
        public PatientDb Patient { get; set; }

        public int UsersId { get; set; }
        public UsersDb Users { get; set; }



    }
}
