using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTMBackend.Models;

namespace DTMBackend.DataBase
{
    public interface IListExams
    {
        void AddExam(Exam newExam);

        List<Exam> GetListExam();

        Exam GetExam(string date);

        void ModifyExam(string date, Exam newExam);

        void DeleteExam(string date);
    }
}