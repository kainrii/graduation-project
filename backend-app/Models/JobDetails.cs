namespace BackendApp.Models
{
    public class JobDetails
    {
        public string JobDescription { get; set; }
        public string CandidateRequirements { get; set; }
        public string Benefits { get; set; }
        public List<string> WorkplaceLocation { get; set; }
    }
}