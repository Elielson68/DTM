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
    public class ExamController : ControllerBase
    {
        private IListExams _listExam;

        public ExamController(IListExams listExams)
        {
            _listExam = listExams;
        }

        [HttpGet]
        public IActionResult Get()
        {
            if (_listExam.GetListExam().Count == 0)
            {
                return NotFound("Empty list");
            }
            return Ok(_listExam.GetListExam());
        }

        [HttpGet("{date}")]
        public IActionResult Get(int date)
        {
            Exam examFind = _listExam.GetExam(date);
            if (examFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(examFind);
        }

        [HttpPost]
        public IActionResult Post(Exam newExam)
        {
            if (newExam == null)
            {
                return NotFound("Empty exam");
            }
            _listExam.AddExam(newExam);
            return Ok(_listExam.GetListExam());
        }

        [HttpPatch("{id}")]
        public IActionResult Patch(int id, Exam newExam)
        {
            if (newExam == null)
            {
                return NotFound("Not found");
            }
            _listExam.ModifyExam(id, newExam);
            return Ok(newExam);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (_listExam.GetListExam().Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _listExam.DeleteExam(id);
            return Ok(_listExam.GetListExam());
        }
    }
}