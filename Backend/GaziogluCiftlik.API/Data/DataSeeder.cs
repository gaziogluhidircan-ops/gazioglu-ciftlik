using GaziogluCiftlik.API.Models;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

namespace GaziogluCiftlik.API.Data
{
    public static class DataSeeder
    {
        public static async Task SeedData(AppDbContext context)
        {
            // Check if database has any data
            if (await context.Categories.AnyAsync())
            {
                return; // Database has been seeded
            }

            // Seed Categories
            var categories = new[]
            {
                new Category { Name = "Yöresel Lezzetler", Description = "Tunceli ve Şarköy yöresinden doğal ürünler" },
                new Category { Name = "Organik Yumurta", Description = "Serbest gezen tavuklardan organik yumurtalar" },
                new Category { Name = "Peynir Çeşitleri", Description = "Geleneksel yöntemlerle üretilmiş yöresel peynirler" },
                new Category { Name = "Zeytin & Zeytinyağı", Description = "Doğal sıkım zeytinyağı ve sofralık zeytin" }
            };

            await context.Categories.AddRangeAsync(categories);
            await context.SaveChangesAsync();

            // Seed Products
            var products = new[]
            {
                new Product { Name = "Şarköy Zeytinyağı (1 Litre)", Description = "Şarköy yöresinden doğal sıkım zeytinyağı.", Price = 500, Stock = 50, ImageUrl = "/products/zeytinyagi.jpg", CategoryId = 4 },
                new Product { Name = "Organik Köy Yumurtası (30'lu Koli)", Description = "Serbest gezen tavuklardan organik köy yumurtası.", Price = 350, Stock = 100, ImageUrl = "/products/koy-yumurtasi.jpg", CategoryId = 2 },
                new Product { Name = "Organik Köy Yumurtası (15'li Koli)", Description = "Serbest gezen tavuklardan organik köy yumurtası.", Price = 200, Stock = 100, ImageUrl = "/products/koy-yumurtasi.jpg", CategoryId = 2 },
                new Product { Name = "Tunceli Tulum Peyniri (1 Kilo)", Description = "Tunceli yöresine özgü doğal tulum peyniri.", Price = 700, Stock = 25, ImageUrl = "/products/tulum-peyniri.jpg", CategoryId = 3 },
                new Product { Name = "Tunceli Cevizi (1 Kilo)", Description = "Doğal kabuklu Tunceli cevizi.", Price = 750, Stock = 30, ImageUrl = "/products/ceviz.jpg", CategoryId = 1 },
                new Product { Name = "Tunceli Tereyağı (1 Kilo)", Description = "Doğal köy tereyağı.", Price = 930, Stock = 15, ImageUrl = "/products/tereyagi.jpg", CategoryId = 1 },
                new Product { Name = "Kuru Dut (1 Kilo)", Description = "Güneşte kurutulmuş doğal dut.", Price = 975, Stock = 100, ImageUrl = "/products/kuru-dut.jpg", CategoryId = 1 },
                new Product { Name = "Doğal Tunceli Halvori Balı (1 Kilo)", Description = "Tunceli Halvori yöresinden doğal bal.", Price = 2600, Stock = 20, ImageUrl = "/products/halvori-bali.jpg", CategoryId = 1 },
                new Product { Name = "Dut Pekmezi (1 Litre)", Description = "Doğal yapım dut pekmezi.", Price = 1400, Stock = 30, ImageUrl = "/products/dut-pekmezi.jpg", CategoryId = 1 },
                new Product { Name = "Dağ Sarımsağı (1 Kilo)", Description = "Doğal toplanmış dağ sarımsağı.", Price = 1800, Stock = 15, ImageUrl = "/products/dag-sarimsagi.jpg", CategoryId = 1 },
                new Product { Name = "Şarköy Sofralık Zeytin (1 Kilo)", Description = "Şarköy yöresinden sofralık doğal zeytin.", Price = 275, Stock = 50, ImageUrl = "/products/sofralik-zeytin.jpg", CategoryId = 4 }
            };

            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();

            // Seed Admin User
            var adminUser = new User
            {
                Username = "admin",
                Email = "admin@gaziogluciftlik.com",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("admin123"),
                Role = "Admin"
            };

            await context.Users.AddRangeAsync(adminUser);
            await context.SaveChangesAsync();
        }
    }
}
