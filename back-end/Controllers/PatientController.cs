using DTMBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Threading.Tasks;
using DTMBackend.DTO;

namespace DTMBackend.Controllers
{
    [ApiController]
    [Route("api/patient")]
    public class PatientController: ControllerBase
    {
        private AppDtmContext _patientContext;

        public PatientController(AppDtmContext context)
        {
            _patientContext = context;
        }
    
        [HttpGet]
        public IActionResult Get()
        {
            List<Patient> list = new List<Patient>();
            foreach(PatientDb p in _patientContext.Patient.ToList())
            {
                Patient patientDto = new Patient(p.PatientId, p.Name, p.DocNumber, p.Email, p.Age, p.Phone, p.Gender, p.PainChoice, p.InitialDistance);
                list.Add(patientDto);
            }
            int count = list.Count;
            if (count == 0)
            {
               return NotFound("Empty list");
            }
            return Ok(list);     
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id) {
            Models.PatientDb p = _patientContext.Patient.FirstOrDefault(p => p.PatientId == id);
            if (p == null)
            {
                return NotFound("Not found");
            }
            Patient patientDto = new Patient(p.PatientId, p.Name, p.DocNumber, p.Email, p.Age, p.Phone, p.Gender, p.PainChoice, p.InitialDistance);
            return Ok(patientDto);
        }

        [HttpGet("{id}/exam")]
        public IActionResult GetExam(int id)
        {
            Models.PatientDb patient = _patientContext.Patient.FirstOrDefault(p => p.PatientId == id);
            if (patient == null)
            {
                return NotFound("Id not found");
            }
            List<Exam> exams = new List<Exam>();
            List<Models.ExamDb> patientExams = _patientContext.Patient.Where(p => p.PatientId == id).Include(e => e.Exams).First().Exams.ToList();
            foreach (Models.ExamDb e in patientExams)
            {
                Exam examDto = new Exam(e.ExamId, e.Date, e.OpenMeasurementPx, e.ShutMeasurementPx, e.ResultMeasurementCm, e.PatientId, e.UsersId);
                exams.Add(examDto);
            }
            return Ok(exams);
        }

        [HttpPost]
        public IActionResult Post(Patient newPatient)
        {
            if (newPatient == null)
            {
                return NotFound("Empty patient");
            }
            Models.PatientDb patient = new Models.PatientDb(newPatient);
            _patientContext.Patient.Add(patient);
            _patientContext.SaveChanges();
            return Ok(_patientContext.Patient.ToList());
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, Patient newPatient)
        {
            if (newPatient == null)
            {
                return NotFound("Not found");
            }
            Models.PatientDb patient = new Models.PatientDb(newPatient);
            patient.PatientId = id;
            _patientContext.Patient.Update(patient);
            _patientContext.SaveChanges();
            return Ok(newPatient);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (_patientContext.Patient.ToList().Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _patientContext.Remove(_patientContext.Patient.FirstOrDefault(p => p.PatientId == id));
            _patientContext.SaveChanges();
            return Ok(_patientContext.Patient.ToList());
        }
    }
}