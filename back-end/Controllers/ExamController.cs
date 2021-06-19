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
    [Route("api/[controller]")]
    public class ExamController : ControllerBase
    {
        private AppDtmContext _examContext;

        public ExamController(AppDtmContext context)
        {
            _examContext = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<Exam> list = _examContext.Exam.ToList();
            if (list.Count == 0)
            {
                return NotFound("Empty list");
            }
            return Ok(list);
        }

        [HttpGet("{date}")]
        public IActionResult Get(int date)
        {
            Exam examFind = _examContext.Exam.Find(date);
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
            _examContext.Exam.Add(newExam);
            _examContext.SaveChanges();
            return Ok(_examContext.Exam.ToList());
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Exam newExam)
        {
            if (newExam == null)
            {
                return NotFound("Not found");
            }
            newExam.id = id;
            _examContext.Exam.Update(newExam);
            _examContext.SaveChanges();
            return Ok(newExam);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            List<Exam> list = _examContext.Exam.ToList();
            if (list.Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _examContext.Exam.Remove(_examContext.Exam.Find(id));
            _examContext.SaveChanges();
            list = _examContext.Exam.ToList();
            return Ok(list);
        }
    }
}