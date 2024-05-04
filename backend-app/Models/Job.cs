using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BackendApp.Models
{
    public class Job
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string JobId { get; set; }
        public string JobName { get; set; }
        public string CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string CompanyLocation { get; set; }
        public int applicant { get; set; }
        public int isActive { get; set; }

        public DateTime creatAt { get; set; }
        public DateTime updatedAt { get; set; } = DateTime.UtcNow;

        public JobGeneralInfo GeneralInfo { get; set; }
        public JobDetails Details { get; set; }

    }
}