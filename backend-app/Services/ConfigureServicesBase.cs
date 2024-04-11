namespace BackendApp.Services
{
    public class ConfigureServicesBase
    {
        public void ConfigureServices(IServiceCollection services)
        {
            // Add CORS service
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin", builder =>
                    builder.WithOrigins("http://localhost:3000")  // Replace with the client URL
                           .AllowAnyMethod()
                           .AllowAnyHeader()
                           .AllowCredentials());
            });

            // Add framework services.
            services.AddControllers();
        }
    }
}