using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTMBackend.Models;

namespace DTMBackend.DataBase
{
    public interface IListUsers
    {
        void AddUser(User newUser);

        List<User> GetListUser();

        User GetUser(int id);

        void ModifyUser(int id, User newUser);

        void DeleteUser(int id);
    }
}