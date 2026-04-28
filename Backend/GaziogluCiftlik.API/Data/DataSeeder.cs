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
                new Category { Name = "Zeytinyağları", Description = "Soğuk sıkım ve doğal zeytinyağları" },
                new Category { Name = "Zeytinler", Description = "Seçme siyah ve yeşil zeytinler" },
                new Category { Name = "Peynirler", Description = "Geleneksel yöntemlerle üretilmiş peynirler" },
                new Category { Name = "Kuru Yemişler", Description = "Taze ve doğal kuru yemişler" },
                new Category { Name = "Reçeller ve Pekmezler", Description = "Ev yapımı reçeller ve doğal pekmezler" }
            };

            await context.Categories.AddRangeAsync(categories);
            await context.SaveChangesAsync();

            // Seed Products
            var products = new[]
            {
                new Product 
                { 
                    Name = "Sızma Zeytinyağı", 
                    Description = "Doğal taş baskı, cam şişede saf sızma zeytinyağı.", 
                    Price = 450, 
                    Stock = 12, 
                    ImageUrl = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1000&auto=format&fit=crop",
                    CategoryId = 1
                },
                new Product 
                { 
                    Name = "Şarköy Zeytini", 
                    Description = "Ahşap kasede sunulan özenle seçilmiş siyah ve yeşil zeytinler.", 
                    Price = 120, 
                    Stock = 45, 
                    ImageUrl = "/products/sarkoy-zeytin.png",
                    CategoryId = 2
                },
                new Product 
                { 
                    Name = "Tunceli Tulum Peyniri", 
                    Description = "Geleneksel yöntemlerle üretilmiş, yoğun aromalı tulum peyniri.", 
                    Price = 320, 
                    Stock = 5, 
                    ImageUrl = "/products/tunceli-tulum- peyniri.jfif",
                    CategoryId = 3
                },
                new Product 
                { 
                    Name = "Tunceli Kabuklu Ceviz", 
                    Description = "Yeni mahsul, ince kabuklu, içi dolgun taze ceviz.", 
                    Price = 280, 
                    Stock = 20, 
                    ImageUrl = "/products/tunceli-kabuklu -ceviz.avif",
                    CategoryId = 4
                },
                new Product 
                { 
                    Name = "Kuru Dut", 
                    Description = "Güneşte kurutulmuş, doğal tatlı, katkısız kuru dut.", 
                    Price = 150, 
                    Stock = 30, 
                    ImageUrl = "/products/kuru-dut.jfif",
                    CategoryId = 5
                },
                new Product 
                { 
                    Name = "Dut Pekmezi", 
                    Description = "Odun ateşinde kaynatılmış, saf ve organik dut pekmezi.", 
                    Price = 180, 
                    Stock = 15, 
                    ImageUrl = "/products/dut-pekmezi.webp",
                    CategoryId = 5
                }
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
