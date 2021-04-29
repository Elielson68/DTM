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

    public class UserController: ControllerBase
    {
        private IListUsers _listUser;

        public UserController(IListUsers listUsers) 
        {
            _listUser = listUsers;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult Get()
        {
            if (_listUser.GetListUser().Count == 0)
            {
                return NotFound("Empty list");
            }
            return Ok(_listUser.GetListUser());
        }

        [HttpGet]
        [Route("api/[controller]/{name}")]
        public IActionResult Get(string name)
        {
            User userFind = _listUser.GetUser(name);
            if (userFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(userFind);
        }

        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult Post(User newUser)
        {
            _listUser.AddUser(newUser);
            if (newUser == null)
            {
                return NotFound("Empty user");
            }
            return Ok(_listUser.GetListUser());
        }

        [HttpPatch]
        [Route("api/[controller]/{name}")]
        public IActionResult Patch(string name, User newUser)
        {
            Console.WriteLine(newUser);
            if (newUser == null)
            {
                return NotFound("Not found");
            }
            _listUser.ModifyUser(name, newUser);
            return Ok(newUser);
        }

        [HttpDelete]
        [Route("api/[controller]/{name}")]
        public IActionResult Delete(string name)
        {
            _listUser.DeleteUser(name);
            if (_listUser.GetListUser().Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            return DayOfWeek(_listUser.GetListUser());
        }
    }
}