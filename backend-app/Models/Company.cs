using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace BackendApp.Models

{
    public class Company
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string CompanyId { get; set; }
        public string CompanyName { get; set;}  
        public string CompanyDescription { get; set;}
        public string CompanyEmail { get; set;} = string.Empty;    
        public string CompanyPhoneNumber { get; set;} = string.Empty;   
        public int CompanyStatus { get; set;}


    }
}
