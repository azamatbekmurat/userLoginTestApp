using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;


namespace UserLoginService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        // GET: api/Users
        [HttpGet]
        public IDictionary<string, string> Get()
        {
            IDictionary<string, string> users = new Dictionary<string, string>();
            users["azamat@gmail.com"] = "password1";
            users["john@gmail.com"] = "password-john";
            users["michael@gmail.com"] = "password-mike";
            users["david@myspace.com"] = "password-dave";

            return users;
        }

        // GET: api/Users/azamat
        [HttpGet("{userName}", Name = "Get")]
        public Tuple<string, string> Get(string userName)
        {
            return new Tuple<string, string>("azamat@gmail.com", "password1");
        }
    }
}
