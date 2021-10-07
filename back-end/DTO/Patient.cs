using DTMBackend.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DTMBackend.DTO
{
    public class Patient
    {
            public Patient(int id, string name, string doc, string email, string age, string phone, string gender, string pain_choice, double initial_distance)
            {
                PatientId = id;
                Name = name;
                DocNumber = doc;
                Email = email;
                Age = age;
                Phone = phone;
                Gender = gender;
                PainChoice = pain_choice;
                InitialDistance = initial_distance;
            }
            public int PatientId { get; set; }

            [Required(ErrorMessage = "Campo Name não pode estar vazio.")]
            [MaxLength(100, ErrorMessage = "Número de caracteres no campo Name excedeu o limite permitido. Máximo de caracteres: 100")]
            public string Name { get; set; }

            [Required(ErrorMessage = "Campo DocNumber não pode estar vazio.")]
            [MaxLength(100, ErrorMessage = "Número de caracteres no campo DocNumber excedeu o limite permitido. Máximo de caracteres: 100")]
            public string DocNumber { get; set; }

            [Required(ErrorMessage = "Campo Email não pode estar vazio.")]
            [MaxLength(100, ErrorMessage = "Número de caracteres no campo Email excedeu o limite permitido. Máximo de caracteres: 100")]
            public string Email { get; set; }

            [Required(ErrorMessage = "Campo Age não pode estar vazio.")]
            [MaxLength(100, ErrorMessage = "Número de caracteres no campo Age excedeu o limite permitido. Máximo de caracteres: 100")]
            public string Age { get; set; }

            [Required(ErrorMessage = "Campo Phone não pode estar vazio.")]
            [MaxLength(100, ErrorMessage = "Número de caracteres no campo Phone excedeu o limite permitido. Máximo de caracteres: 100")]
            public string Phone { get; set; }

            [Required(ErrorMessage = "Campo Gender não pode estar vazio.")]
            [MaxLength(100, ErrorMessage = "Número de caracteres no campo Gender excedeu o limite permitido. Máximo de caracteres: 100")]
            public string Gender { get; set; }

            [Required(ErrorMessage = "Campo PainChoice não pode estar vazio.")]
            [MaxLength(100, ErrorMessage = "Número de caracteres no campo PainChoice excedeu o limite permitido. Máximo de caracteres: 100")]
            public string PainChoice { get; set; }

            [Required(ErrorMessage = "Campo InitialDistance não pode estar vazio.")]
            public double InitialDistance { get; set; }
    }
}
