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
        private int id = 0;
        public void AddUser(User newUser) {
            id++;
            newUser.id = id;
            _listUser.Add(newUser);
        }

        public List<User> GetListUser() {
            return _listUser;
        }

        public User GetUser(int id) {
            User userFind = _listUser.Find(x => x.id == id);
            return userFind;
        }

        public void ModifyUser(int id, User newUser) {
            User modifyUser = _listUser.FirstOrDefault(x => x.id == id);
            modifyUser.id = newUser.id;
            modifyUser.RegisteredNumber = newUser.RegisteredNumber;
        }

        public void DeleteUser(int id) {
            User removeUser = _listUser.Find(x => x.id == id);
            _listUser.Remove(removeUser);
        }
    }
}