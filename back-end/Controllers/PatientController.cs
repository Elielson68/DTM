using DTMBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Threading.Tasks;
using DTMBackend.DataBase;

namespace DTMBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController: ControllerBase
    {
        private IListPatients _listPatient;

        public PatientController(IListPatients listPatients)
        {
            _listPatient = listPatients;
        }
    
        [HttpGet]
        public IActionResult Get()
        {
            if(_listPatient.GetListPatient().Count == 0)
            {
                return NotFound("Empty list");
            }
            return Ok(_listPatient.GetListPatient());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Patient pacientFind = _listPatient.GetPatient(id);
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
            _listPatient.AddPatient(newPatient);
            return Ok(_listPatient.GetListPatient());
        }

        [HttpPatch("{id}")]
        public IActionResult Patch(int id, Patient newPatient)
        {
            if (newPatient == null)
            {
                return NotFound("Not found");
            }
            _listPatient.ModifyPatient(id, newPatient);
            return Ok(newPatient);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (_listPatient.GetListPatient().Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _listPatient.DeletePatient(id);
            return Ok(_listPatient.GetListPatient());
        }
    }
}