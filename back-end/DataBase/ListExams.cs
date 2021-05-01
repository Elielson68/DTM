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

        public void AddExam(Exam newExam) {
            _listExam.Add(newExam);
        }

        public List<Exam> GetListExam() {
            return _listExam;
        }

        public Exam GetExam(string date) {
            Exam examFind = _listExam.Find(x => x.Date == date);
            return examFind;
        }

        public void ModifyExam(string date, Exam newExam) {
            Exam modifyExam = _listExam.FirstOrDefault(x => x.Date == date);
            Console.WriteLine(newExam.OpenMeasurementPx);
            Console.WriteLine(newExam.ShutMeasurementPx);
            Console.WriteLine(newExam.ResultMeasurementCm);
            modifyExam.OpenMeasurementPx = newExam.OpenMeasurementPx;
            modifyExam.ShutMeasurementPx = newExam.ShutMeasurementPx;
            modifyExam.ResultMeasurementCm = newExam.ResultMeasurementCm;
        }

        public void DeleteExam(string date) {
            Exam removeExam = _listExam.Find(x => x.Date == date);
            _listExam.Remove(removeExam);
        }
    }
}