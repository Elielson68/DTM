using DTMBackend.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DTMBackend.DTO.Login
{
    public class LoginUser
    {

        public LoginUser(string email, string password)
        {
            Email = email;
            Password = password;
        }


        [Required(ErrorMessage = "Campo Email não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Email excedeu o limite permitido. Máximo de caracteres: 100")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Campo Password não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Password excedeu o limite permitido. Máximo de caracteres: 100")]
        public string Password { get; set; }

    }
}
