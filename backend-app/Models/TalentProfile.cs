using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Security.Cryptography.Xml;
using MongoDB.Bson.Serialization.Serializers;

namespace BackendApp.Models
{
    public class TalentProfile
    {
        [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public PersonalDetails PersonalDetails { get; set; }
        public Background Background { get; set; }
        public ITSkills ITSkills { get; set; }
        public Preferences Preferences { get; set; }

    }
    public class PersonalDetails
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateOnly Dob { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string Nationality { get; set; }
        public string Address { get; set; }
        public List<Social> SocialNetworks { get; set; }
        public class Social
        {
            public string Name { get; set; }
            public string Link { get; set; }
        }

    }

    public class Background
    {
        public List<Education> Educations { get; set; } = new List<Education>();

        public List<Employment> Employments { get; set; } = new List<Employment>();

        public class Education
        {
            public int Start { get; set; }
            public int End { get; set; }
            public string PlaceofEducation { get; set; }
            public string Degree { get; set; }
            public string Description { get; set; }

        }
        public class Employment
        {
            public int Start { get; set; }
            public int End { get; set; }
            public string PlaceofEmployment { get; set; }

            public string Position { get; set; }
            public string Description { get; set; }

        }

    }


    public class ITSkills
    {
        public List<Project> Projects { get; set; }

        public class Project
        {
            public List<string> Skills { get; set; }
            public string ProjectName { get; set; }
            public string ProjectDescription { get; set; }
            public string ProjectLink { get; set; }
        }


    }

    public class Preferences
    {
        public int ExpectedSalary { get; set; }
        public List<String> InterestedField { get; set; }

    }
}
