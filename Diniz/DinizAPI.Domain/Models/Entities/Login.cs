using System;
using System.Collections.Generic;
using System.Text;

namespace DinizAPI.Domain.Models.Entities
{
    public class Login
    {
        public int LoginId { get; set; }
        public bool Admin { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Cpf { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Nome { get; set; }

    }
}
