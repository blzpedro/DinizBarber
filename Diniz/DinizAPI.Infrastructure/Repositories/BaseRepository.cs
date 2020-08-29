using DinizAPI.Infrastructure.Context;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace DinizAPI.Infrastructure.Repositories
{
    public class BaseRepository
    {
        protected readonly DinizAPIContext _context;

        public BaseRepository(IConfiguration configuration)
        {
            _context = new DinizAPIContext(configuration);
        }

    }
}
