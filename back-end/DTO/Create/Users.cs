using DTMBackend.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DTMBackend.DTO.Create
{
    public class Users
    {

        public Users(int id, string name, string password, string email, string register_number)
        {
            UsersId = id;
            Name = name;
            Password = password;
            Email = email;
            RegisteredNumber = register_number;
        }

        public int UsersId { get; set; }

        [Required(ErrorMessage = "Campo Name não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Name excedeu o limite permitido. Máximo de caracteres: 100")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Campo Password não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Password excedeu o limite permitido. Máximo de caracteres: 100")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Campo Email não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo Email excedeu o limite permitido. Máximo de caracteres: 100")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Campo RegisteredNumber não pode estar vazio.")]
        [MaxLength(100, ErrorMessage = "Número de caracteres no campo RegisteredNumber excedeu o limite permitido. Máximo de caracteres: 100")]
        public string RegisteredNumber { get; set; }

    }
}
