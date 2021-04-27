using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTMBackend.Models;

namespace DTMBackend.DataBase
{
    public interface IListPatients
    {
        void AddPatient(Patient newPatient);

        List<Patient> GetListPatient();

        Patient GetPatient(string name);

        void ModifyPatient(string name, Patient newPatient);

        void DeletePatient(string name);
    }
}
