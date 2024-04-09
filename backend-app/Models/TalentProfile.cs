using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
namespace BackendApp.Models
{
    public class TalentProfile
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string TalentId { get; set; }


    }
}
