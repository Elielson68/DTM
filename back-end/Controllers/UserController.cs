using DTMBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DTMBackend.DTO.Create;
using DTMBackend.DTO.Request;

namespace DTMBackend.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController: ControllerBase
    {
        private AppDtmContext _userContext;

        public UserController(AppDtmContext context)
        {
            _userContext = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<UsersDb> list = _userContext.Users.ToList();
            if (list.Count == 0)
            {
                return NotFound("Empty list");
            }
            List<DTO.Request.Users> listDTO = new List<DTO.Request.Users>();
            foreach(UsersDb u in list)
            {
                DTO.Request.Users user = new DTO.Request.Users(u.UsersId, u.Name, u.Email, u.RegisteredNumber);
                listDTO.Add(user);
            }
            return Ok(listDTO);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            UsersDb userFind = _userContext.Users.FirstOrDefault(u => u.UsersId == id);
            if (userFind == null)
            {
                return NotFound("Not found");
            }
            DTO.Request.Users user = new DTO.Request.Users(userFind.UsersId, userFind.Name, userFind.Email, userFind.RegisteredNumber);
            return Ok(user);
        }
        [HttpGet("{id}/exam")]
        public IActionResult GetExam(int id)
        {
            UsersDb userExams = _userContext.Users.FirstOrDefault(u => u.UsersId == id);
            if (userExams == null)
            {
                return NotFound("Id not found");
            }
            List<Exam> listDTO = new List<Exam>();
            List<ExamDb> list = _userContext.Users.Include(a => a.Exams).Where(p => p.UsersId == id).First().Exams.ToList();
            foreach(ExamDb e in list)
            {
                Exam exam = new Exam(e.ExamId, e.Date, e.OpenMeasurementPx, e.ShutMeasurementPx, e.ResultMeasurementCm, e.PatientId, e.UsersId);
                listDTO.Add(exam);
            }
            return Ok(listDTO);
        }
        [HttpPost]
        public IActionResult Post(DTO.Create.Users newUser)
        {
            if (newUser == null)
            {
                return NotFound("Empty user");
            }
            UsersDb user = new UsersDb(newUser);
            _userContext.Users.Add(user);
            _userContext.SaveChanges();
            UsersDb userDB = _userContext.Users.OrderByDescending(u => u.UsersId).FirstOrDefault();
            DTO.Request.Users userFind = new DTO.Request.Users(userDB.UsersId, userDB.Name, userDB.Email, userDB.RegisteredNumber);
            return Ok(userFind);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, DTO.Create.Users newUser)
        {
            if (newUser == null)
            {
                return NotFound("Not found");
            }
            UsersDb user = new UsersDb(newUser);
            user.UsersId = id;
            _userContext.Users.Update(user);
            _userContext.SaveChanges();
            return Ok(newUser);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            List<UsersDb> list = _userContext.Users.ToList();
            if (list.Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _userContext.Users.Remove(_userContext.Users.FirstOrDefault(u => u.UsersId == id));
            return Ok(_userContext.Users.ToList());
        }
    }
}