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

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Users userFind = _userContext.Users.Find(id);
            if (userFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(userFind);
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

        [HttpPatch("{id}")]
        public IActionResult Patch(int id, Users newUser)
        {
            if (newUser == null)
            {
                return NotFound("Not found");
            }
            newUser.id = id;
            _userContext.Users.Update(newUser);
            _userContext.SaveChanges();
            return Ok(newUser);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            List<Users> list = _userContext.Users.ToList();
            if (list.Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _userContext.Users.Remove(_userContext.Users.Find(id));
            return Ok(_userContext.Users.ToList());
        }
    }
}