using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTMBackend.Models;

namespace DTMBackend.DataBase
{
    public class ListExams: IListExams
    {
        List<Exam> _listExam = new List<Exam>();
        private int id = 0;
        public void AddExam(Exam newExam) {
            id++;
            newExam.id = id;
            _listExam.Add(newExam);
        }

        public List<Exam> GetListExam() {
            return _listExam;
        }

        public Exam GetExam(int id) {
            Exam examFind = _listExam.Find(x => x.id == id);
            return examFind;
        }

        public void ModifyExam(int id, Exam newExam) {
            Exam modifyExam = _listExam.FirstOrDefault(x => x.id == id);
            modifyExam.OpenMeasurementPx = newExam.OpenMeasurementPx;
            modifyExam.ShutMeasurementPx = newExam.ShutMeasurementPx;
            modifyExam.ResultMeasurementCm = newExam.ResultMeasurementCm;
        }

        public void DeleteExam(int id) {
            Exam removeExam = _listExam.Find(x => x.id == id);
            _listExam.Remove(removeExam);
        }
    }
}