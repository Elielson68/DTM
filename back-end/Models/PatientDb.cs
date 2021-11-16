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
    [Table("patient")]
    public class PatientDb
    {
        public PatientDb()
        {

        }
        public PatientDb(DTO.Create.Patient patient)
        {
            Name = patient.Name;
            DocNumber = patient.DocNumber;
            Email = patient.Email;
            Age = patient.Age;
            Phone = patient.Phone;
            Phone = patient.Phone; 
            Gender = patient.Gender;
            PainChoice = patient.PainChoice;
            InitialDistance = patient.InitialDistance;
        }
        [Key]
        public int PatientId { get; set;}

        public string Name { get; set; }

        public long DocNumber { get; set; }

        public string Email { get; set; }
        
        public string Age { get; set; }
        
        public string Phone { get; set; }

        public string Gender { get; set; }

        public string PainChoice { get; set; }
        
        public double InitialDistance {get; set;}

        public List<ExamDb> Exams { get; set; }
    }
}
