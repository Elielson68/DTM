using DTMBackend.Models;
using Microsoft.AspNetCore.Mvc;
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
    [Route("api/exam")]
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
            List<Models.ExamDb> list = _examContext.Exam.ToList();
            if (list.Count == 0)
            {
                return NotFound("Empty list");
            }
            List<Exam> listDTO = new List<Exam>();
            foreach(ExamDb e in list)
            {
                Exam exam = new Exam(e.ExamId, e.Date, e.OpenMeasurementPx, e.ShutMeasurementPx, e.ResultMeasurementCm, e.PatientId, e.UsersId);
                listDTO.Add(exam);
            }
            return Ok(listDTO);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ExamDb examFind = _examContext.Exam.Find(id);
            if (examFind == null)
            {
                return NotFound("Not found");
            }
            Exam examDTO = new Exam(examFind.ExamId, examFind.Date, examFind.OpenMeasurementPx, examFind.ShutMeasurementPx, examFind.ResultMeasurementCm, examFind.PatientId, examFind.UsersId);
            return Ok(examDTO);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Exam exam)
        {
            if (exam == null)
            {
                return NotFound("Empty exam");
            }
            UsersDb users = _examContext.Users.FirstOrDefault(u => u.UsersId == exam.UsersId);
            PatientDb patient = _examContext.Patient.FirstOrDefault(p => p.PatientId == exam.PatientId);
            ExamDb newExam = new ExamDb(exam, patient, users);
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
            UsersDb users = _examContext.Users.FirstOrDefault(u => u.UsersId == newExam.UsersId);
            PatientDb patient = _examContext.Patient.FirstOrDefault(p => p.PatientId == newExam.PatientId);
            ExamDb exam = new ExamDb(newExam, patient, users);
            exam.ExamId = id;
            _examContext.Exam.Update(exam);
            _examContext.SaveChanges();
            return Ok(newExam);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            List<ExamDb> list = _examContext.Exam.ToList();
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