namespace BackendApp.Models
{
    public class Interview
    {
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public string TalentName { get; set; }
        public string TalentId { get; set; }
        public string CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string Interviewers { get; set; }
        public string Location { get; set; }
        public string Status { get; set; } 
        public List<CompanyFeedback> CompanyFeedbacks { get; set; } 
        public List<TalentFeedback> TalentFeedbacks { get; set; } 

        public class CompanyFeedback
        {
            public string Username { get; set; }
            public string Content { get; set; }
            
        }

        public class TalentFeedback
        {
            public string Username { get; set; }
            public string Content { get; set; }

        }
    }
}
