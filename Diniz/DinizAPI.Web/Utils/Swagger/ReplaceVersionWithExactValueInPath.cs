using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinizAPI.Web.Utils.Swagger
{
    public class ReplaceVersionWithExactValueInPath : IDocumentFilter
    {
        public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
        {
            var toReplaceWith = new OpenApiPaths();

            foreach (var (key, value) in swaggerDoc.Paths)
            {
                toReplaceWith.Add(key.Replace("v{version}", "v" + swaggerDoc.Info.Version, StringComparison.InvariantCulture), value);
            }

            swaggerDoc.Paths = toReplaceWith;
        }
    }
}
