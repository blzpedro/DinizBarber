using DinizAPI.Domain.Models.Entities;
using DinizAPI.Infrastructure.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace DinizAPI.Infrastructure.Context
{
    public class DinizAPIContext : DbContext
    {
        public readonly string _connectionString = string.Empty;

        public DinizAPIContext(IConfiguration configuration)
        {
            _connectionString = "Data Source=RICARDO;Initial Catalog=Diniz;Integrated Security=True;Connect Timeout=30;";//configuration.GetConnectionString("Diniz");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        //DBSET'S
        public DbSet<Login> Login { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new LoginConfiguration());
        }


    }
}
