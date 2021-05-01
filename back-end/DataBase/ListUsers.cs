using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTMBackend.Models;

namespace DTMBackend.DataBase
{
    public class ListUsers : IListUsers 
    {
        List<User> _listUser = new List<User>();

        public void AddUser(User newUser) {
            _listUser.Add(newUser);
        }

        public List<User> GetListUser() {
            return _listUser;
        }

        public User GetUser(string name) {
            User userFind = _listUser.Find(x => x.Name == name);
            return userFind;
        }

        public void ModifyUser(string name, User newUser) {
            User modifyUser = _listUser.FirstOrDefault(x => x.Name == name);
            Console.WriteLine(newUser.Name);
            Console.WriteLine(newUser.RegisteredNumber);
            modifyUser.Name = newUser.Name;
            modifyUser.RegisteredNumber = newUser.RegisteredNumber;
        }

        public void DeleteUser(string name) {
            User removeUser = _listUser.Find(x => x.Name == name);
            _listUser.Remove(removeUser);
        }
    }
}