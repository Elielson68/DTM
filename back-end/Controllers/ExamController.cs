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

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Exam examFind = _examContext.Exam.Find(id);
            if (examFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(examFind);
        }

        [HttpPost("{UsersId}/{PatientId}")]
        public async Task<IActionResult> Post(int UsersId, int PatientId, Exam exam)
        {
            if (exam == null)
            {
                return NotFound("Empty exam");
            }
            Users users = await _examContext.Users.FindAsync(UsersId);
            Patient patient = await _examContext.Patient.FindAsync(PatientId);
            
            Exam newExam = new Exam {
                Date = exam.Date,
                OpenMeasurementPx = exam.OpenMeasurementPx,
                ShutMeasurementPx = exam.ShutMeasurementPx,
                ResultMeasurementCm = exam.ResultMeasurementCm,
                ReportOpen = null,
                ReportShut = null,
                Users = users,
                Patient = patient
            };
            await _examContext.Exam.AddAsync(newExam);
            await _examContext.SaveChangesAsync();
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