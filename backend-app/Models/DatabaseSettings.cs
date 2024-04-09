﻿namespace BackendApp.Models
{
    public class DatabaseSettings
    {
        public string? ConnectionString { get; set; }
        public string? DatabaseName { get; set; }
        public string? CompaniesCollectionName { get; set; }
        public string? TalentsCollectionName { get; set; }
        public string? JobsCollectionName { get; set; }
    }
}