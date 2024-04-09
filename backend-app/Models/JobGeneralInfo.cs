namespace BackendApp.Models
{
    public class JobGeneralInfo
    {
        public string Position { get; set; }
        public string Experience { get; set; }
        public int HiringQuantity { get; set; }
        public List<string> EmploymentType { get; set; }
        public string Gender { get; set; }
        public List<string> Industry { get; set; }
    }
}