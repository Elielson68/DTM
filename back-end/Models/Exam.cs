using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTMBackend.Models
{
    public class Exam
    {
        public int id {get; set;}
        public string Date { get; set; }
        public double OpenMeasurementPx { get; set; }
        public double ShutMeasurementPx  { get; set; }
        public double ResultMeasurementCm { get; set; }
    }
}
