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
    
    public class PatientController: ControllerBase
    {
        private IListPatients _listPatient;

        public PatientController(IListPatients listPatients)
        {
            _listPatient = listPatients;
        }
    
        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult Get()
        {
            if(_listPatient.GetListPatient().Count == 0)
            {
                return NotFound("Empty list");
            }
            return Ok(_listPatient.GetListPatient());
        }

        [HttpGet]
        [Route("api/[controller]/{name}")]
        public IActionResult Get(string name)
        {
            Patient pacientFind = _listPatient.GetPatient(name);
            if (pacientFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(pacientFind);
        }

        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult Post(Patient newPatient)
        {
            if (newPatient == null)
            {
                return NotFound("Empty patient");
            }
            _listPatient.AddPatient(newPatient);
            return Ok(_listPatient.GetListPatient());
        }

        [HttpPatch]
        [Route("api/[controller]/{name}")]
        public IActionResult Patch(string name, Patient newPatient)
        {
            if (newPatient == null)
            {
                return NotFound("Not found");
            }
            _listPatient.ModifyPatient(name, newPatient);
            return Ok(newPatient);
        }

        [HttpDelete]
        [Route("api/[controller]/{name}")]
        public IActionResult Delete(string name)
        {
            if (_listPatient.GetListPatient().Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _listPatient.DeletePatient(name);
            return Ok(_listPatient.GetListPatient());
        }
    }
}