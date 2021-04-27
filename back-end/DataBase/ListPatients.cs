using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTMBackend.Models;

namespace DTMBackend.DataBase
{
    public class ListPatients: IListPatients
    {
        List<Patient> _listPatient = new List<Patient>();
        public void AddPatient(Patient newPatient){
            _listPatient.Add(newPatient);
        }

        public List<Patient> GetListPatient(){
            return _listPatient;
        }

        public Patient GetPatient(string name){
            Patient patientFind = _listPatient.Find(x => x.Name == name);
            return patientFind;
        }

        public void ModifyPatient(string name, Patient newPatient){
            Patient modifyPatient = _listPatient.FirstOrDefault(x => x.Name == name);
            Console.WriteLine(newPatient.Name);
            Console.WriteLine(newPatient.Age);
            modifyPatient.Name = newPatient.Name;
            modifyPatient.Age = newPatient.Age;
        }

        public void DeletePatient(string name){
            Patient removePatient = _listPatient.Find(x => x.Name == name);
            _listPatient.Remove(removePatient);
            
        }
    }
}
