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

        Patient GetPatient(int id);

        void ModifyPatient(int id, Patient newPatient);

        void DeletePatient(int id);
    }
}
