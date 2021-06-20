using DTMBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Threading.Tasks;
namespace DTMBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController: ControllerBase
    {
        private Models.AppDtmContext _patientContext;

        public PatientController(Models.AppDtmContext context)
        {
            _patientContext = context;
        }
    
        [HttpGet]
        public IActionResult Get()
        {
            List<Patient> list = _patientContext.Patient.ToList();
            int count = list.Count;
            if (count == 0)
            {
               return NotFound("Empty list");
            }
            return Ok(list);     
        }

        [HttpGet("{PatientId}")]
        public IActionResult Get(int PatientId)
        {
            Patient pacientFind = _patientContext.Patient.Find(PatientId);
            if (pacientFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(pacientFind);
        }

        [HttpGet("{PatientId}/exam")]
        public IActionResult GetExam(int PatientId)
        {
            
            Patient pacientExams = _patientContext.Patient.Find(PatientId);
            if (pacientExams == null)
            {
                return NotFound("Id not found");
            }
            pacientExams = _patientContext.Patient.Where(p => p.PatientId == PatientId).Include(e => e.Exams).First();
            return Ok(pacientExams);
        }

        [HttpPost]
        public IActionResult Post(Patient newPatient)
        {
            if (newPatient == null)
            {
                return NotFound("Empty patient");
            }
            _patientContext.Patient.Add(newPatient);
            _patientContext.SaveChanges();
            return Ok(_patientContext.Patient.ToList());
        }
        [HttpPut("{PatientId}")]
        public IActionResult Put(int PatientId, Patient newPatient)
        {
            if (newPatient == null)
            {
                return NotFound("Not found");
            }
            newPatient.PatientId = PatientId;
            _patientContext.Patient.Update(newPatient);
            _patientContext.SaveChanges();
            return Ok(newPatient);
        }

        [HttpDelete("{PatientId}")]
        public IActionResult Delete(int PatientId)
        {
            if (_patientContext.Patient.ToList().Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _patientContext.Remove(_patientContext.Patient.Find(PatientId));
            _patientContext.SaveChanges();
            return Ok(_patientContext.Patient.ToList());
        }
    }
}