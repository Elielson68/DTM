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
    public class UserController: ControllerBase
    {
        private IListUsers _listUser;

        public UserController(IListUsers listUsers) 
        {
            _listUser = listUsers;
        }

        [HttpGet]
        public IActionResult Get()
        {
            if (_listUser.GetListUser().Count == 0)
            {
                return NotFound("Empty list");
            }
            return Ok(_listUser.GetListUser());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            User userFind = _listUser.GetUser(id);
            if (userFind == null)
            {
                return NotFound("Not found");
            }
            return Ok(userFind);
        }

        [HttpPost]
        public IActionResult Post(User newUser)
        {
            if (newUser == null)
            {
                return NotFound("Empty user");
            }
            _listUser.AddUser(newUser);
            return Ok(_listUser.GetListUser());
        }

        [HttpPatch("{id}")]
        public IActionResult Patch(int id, User newUser)
        {
            if (newUser == null)
            {
                return NotFound("Not found");
            }
            _listUser.ModifyUser(id, newUser);
            return Ok(newUser);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (_listUser.GetListUser().Count == 0)
            {
                return NotFound("Lista de pacientes vazia");
            }
            _listUser.DeleteUser(id);
            return Ok(_listUser.GetListUser());
        }
    }
}