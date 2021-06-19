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

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Patient pacientFind = _patientContext.Patient.Find(id);
            if (pacientFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(pacientFind);
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
        [HttpPut("{id}")]
        public IActionResult Put(int id, Patient newPatient)
        {
            if (newPatient == null)
            {
                return NotFound("Not found");
            }
            newPatient.id = id;
            _patientContext.Patient.Update(newPatient);
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
            _patientContext.Remove(_patientContext.Patient.Find(id));
            _patientContext.SaveChanges();
            return Ok(_patientContext.Patient.ToList());
        }
    }
}