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

    public class ExamController : ControllerBase
    {
        private IListExams _listExam;

        public ExamController(IListExams listExams)
        {
            _listExam = listExams;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult Get()
        {
            if (_listExam.GetListExam().Count == 0)
            {
                return NotFound("Empty list");
            }
            return Ok(_listExam.GetListExam());
        }

        [HttpGet]
        [Route("api/[controller]/{date}")]
        public IActionResult Get(string date)
        {
            Exam examFind = _listExam.GetExam(date);
            if (examFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(examFind);
        }

        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult Post(Exam newExam)
        {
            _listExam.AddExam(newExam);
            if (newExam == null)
            {
                return NotFound("Empty exam");
            }
            return Ok(_listExam.GetListExam());
        }

        [HttpPatch]
        [Route("api/[controller]/{date}")]
        public IActionResult Patch(string date, Exam newExam)
        {
            Console.WriteLine(newExam);
            if (newExam == null)
            {
                return NotFound("Not found");
            }
            _listExam.ModifyExam(date, newExam);
            return Ok(newExam);
        }

        [HttpDelete]
        [Route("api/[controller]/{date}")]
        public IActionResult Delete(string date)
        {
            _listExam.DeleteExam(date);
            if (_listExam.GetListExam().Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            return DayOfWeek(_listExam.GetListExam());
        }

    }
}