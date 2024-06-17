using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

public class ApplicationUser : IdentityUser<Guid>
{
    [Required]
    [StringLength(100, MinimumLength = 5)]
    public string Email { get; set; }

    public string ProfilePicture { get; set; }

    public bool IsActive { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime? LastLoginDate { get; set; }

    public virtual ICollection<ApplicationUserRole> Roles { get; set; }
}

public class ApplicationUserRole : IdentityUserRole<Guid>
{
    public virtual ApplicationUser User { get; set; }

    public virtual ApplicationRole Role { get; set; }
}

public class ApplicationRole : IdentityRole<Guid>
{
    public string Name { get; set; }

    public string Description { get; set; }
}