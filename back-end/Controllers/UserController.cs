using DTMBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace DTMBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
            List<Users> list = _userContext.Users.ToList();
            if (list.Count == 0)
            {
                return NotFound("Empty list");
            }
            return Ok(list);
        }

        [HttpGet("{UsersId}")]
        public IActionResult Get(int UsersId)
        {
            Users userFind = _userContext.Users.Find(UsersId);
            if (userFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(userFind);
        }
        [HttpGet("{UsersId}/exam")]
        public IActionResult GetExam(int UsersId)
        {
            Users userExams = _userContext.Users.Find(UsersId);
            if (userExams == null)
            {
                return NotFound("Id not found");
            }
            userExams = _userContext.Users.Include(a => a.Exams).Where(p => p.UsersId == UsersId).First();
            return Ok(userExams);
        }
        [HttpPost]
        public IActionResult Post(Users newUser)
        {
            if (newUser == null)
            {
                return NotFound("Empty user");
            }
            _userContext.Users.Add(newUser);
            _userContext.SaveChanges();
            return Ok(_userContext.Users.ToList());
        }

        [HttpPatch("{UsersId}")]
        public IActionResult Patch(int UsersId, Users newUser)
        {
            if (newUser == null)
            {
                return NotFound("Not found");
            }
            newUser.UsersId = UsersId;
            _userContext.Users.Update(newUser);
            _userContext.SaveChanges();
            return Ok(newUser);
        }

        [HttpDelete("{UsersId}")]
        public IActionResult Delete(int UsersId)
        {
            List<Users> list = _userContext.Users.ToList();
            if (list.Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _userContext.Users.Remove(_userContext.Users.Find(UsersId));
            return Ok(_userContext.Users.ToList());
        }
    }
}