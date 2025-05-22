using Microsoft.EntityFrameworkCore;
using MvcNews_2.Models;

namespace MvcNews_2.Data
{
    public class NewsDbContext : DbContext
    {
        public NewsDbContext(DbContextOptions<NewsDbContext> options) :
        base(options)
        { }
        public DbSet<NewsItem> News { get; set; } = null!;
    }
}
