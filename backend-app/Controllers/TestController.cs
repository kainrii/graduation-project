using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using backend_app.Models;
using System.Xml.Linq;


namespace backend_app.Controllers
{
    public class TestController : ApiController
    {
        [HttpPost]
        [Route("Registration")]
        public string Registration(Talent talent)
        {
            string message = string.Empty;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("usp_Registration", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@Name", talent.Name);
                        cmd.Parameters.AddWithValue("@PhoneNumber", talent.PhoneNumber);
                        cmd.Parameters.AddWithValue("@Address", talent.Address);
                        cmd.Parameters.AddWithValue("@IsActive", talent.IsActive);

                        conn.Open();
                        int i = cmd.ExecuteNonQuery();

                        message = i > 0 ? "Data inserted" : "err";
                    }
                }
            }
            catch (Exception ex)
            {
                message = ex.Message; 
            }

            return message; 
        }

        [HttpPost]
        [Route("Login")]
        public string Login(Talent talent)
        {
            string message = string.Empty;
            try
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
                {
                    
                    using (SqlCommand cmd = new SqlCommand("usp_Login", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@Name", talent.Name);
                        cmd.Parameters.AddWithValue("@PhoneNumber", talent.PhoneNumber);
                        conn.Open();

                        using (SqlDataAdapter adapter = new SqlDataAdapter(cmd))
                        {
                            DataTable dt = new DataTable();
                            adapter.Fill(dt);

                            message = dt.Rows.Count > 0 ? "user is valid" : "user is invalid";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                message = ex.Message;
            }

            return message;
        }
    }
}
