namespace BackendApp.Services
{
    public class AuthorizationService
    {
        public bool CanViewCompanyInfo(User user)
        {
            return user.Role == Role.Developer || user.Role == Role.Manager || user.Role == Role.HrMember || user.Role == Role.Admin;
        }

        public bool CanViewJobInfo(User user)
        {
            return user.Role == Role.Developer || user.Role == Role.Manager || user.Role == Role.HrMember || user.Role == Role.Admin;
        }

        public bool CanViewProfileInfo(User user)
        {
            return user.Role == Role.Developer || user.Role == Role.Manager || user.Role == Role.HrMember || user.Role == Role.Admin;
        }

        public bool CanViewInterviewInfo(User user)
        {
            return user.Role == Role.Developer || user.Role == Role.Manager || user.Role == Role.HrMember || user.Role == Role.Admin;
        }

        public bool CanAcceptRejectInterview(User user)
        {
            return user.Role == Role.Developer;
        }

        public bool CanEditCompanyInfo(User user)
        {
            return user.Role == Role.Manager || user.Role == Role.Admin;
        }

        public bool CanEditHrMemberInfo(User user)
        {
            return user.Role == Role.Manager || user.Role == Role.Admin;
        }

        public bool CanEditJobInfo(User user)
        {
            return user.Role == Role.Manager || user.Role == Role.Admin;
        }

        public bool CanEditProfileInfo(User user)
        {
            return user.Role == Role.Developer || user.Role == Role.Manager || user.Role == Role.HrMember || user.Role == Role.Admin;
        }
    }
}
