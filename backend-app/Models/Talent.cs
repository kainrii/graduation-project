using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BackendApp.Models
{
    public class Talent
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string TalentId { get; set; }
        public string TalentName { get; set; } = string.Empty;  
        public string TalentEmail { get; set; } = string.Empty;
        public string TalentPhone { get; set; } = string.Empty;
        public string TalentUsername { get; set; } = string.Empty;
        public string TalentPassword { set; get; } = string.Empty;
        public int TalentStatus{ get; set; }
    
    }
}
