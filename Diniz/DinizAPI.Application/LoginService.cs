using DinizAPI.Domain.Interfaces.Repositories;
using DinizAPI.Domain.Interfaces.Services;
using DinizAPI.Domain.Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DinizAPI.Application
{
    public class LoginService : ILoginService
    {
        private readonly ILoginRepository _loginRepository;
        
        public LoginService(ILoginRepository loginRepository)
        {
            _loginRepository = loginRepository;
        }

        public Login CadastroLogin(Login login)
        {
            return _loginRepository.CadastroLogin(login);
        }
    }
}
