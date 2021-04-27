using DTMBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Threading.Tasks;

namespace DTMBackend.Controllers
{
    [ApiController]
    
    public class PatientController: ControllerBase
    {
        List<Patient> _listPatient = new List<Patient>()
        {
            new Patient(){Nome="Elielson", Idade=22},
            new Patient(){Nome="Fernando", Idade=23}
        };

        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult Get()
        {
            if(_listPatient.Count == 0)
            {
                return NotFound("Vazio");
            }
            return Ok(_listPatient);
        }

        [HttpGet]
        [Route("api/[controller]/{nome}")]
        public IActionResult Get(string nome)
        {
            Patient pacientFind = _listPatient.Find(x => x.Nome == nome);
            if (pacientFind == null)
            {
                return NotFound("Paciente não encontrado");
            }
            return Ok(pacientFind);
        }
    }
}
