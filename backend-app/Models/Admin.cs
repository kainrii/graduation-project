﻿namespace BackendApp.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
