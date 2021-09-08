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
        private int id=0;

        List<Patient> _listPatient = new List<Patient>();
        public void AddPatient(Patient newPatient){
            id++;
            newPatient.id = id;
            _listPatient.Add(newPatient);
        }

        public List<Patient> GetListPatient(){
            return _listPatient;
        }

        public Patient GetPatient(int id){
            Patient patientFind = _listPatient.Find(x => x.id == id);
            return patientFind;
        }

        public void ModifyPatient(int id, Patient newPatient){
            Patient modifyPatient = _listPatient.FirstOrDefault(x => x.id == id);
            modifyPatient.id = newPatient.id;
            modifyPatient.Age = newPatient.Age;
        }

        public void DeletePatient(int id){
            Patient removePatient = _listPatient.Find(x => x.id == id);
            _listPatient.Remove(removePatient);
            
        }
    }
}
