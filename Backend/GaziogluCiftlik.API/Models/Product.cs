using System.ComponentModel.DataAnnotations;

namespace GaziogluCiftlik.API.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string? Description { get; set; }

        public decimal Price { get; set; }

        public int Stock { get; set; }

        [MaxLength(500)]
        public string? ImageUrl { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Foreign Key
        public int CategoryId { get; set; }
        
        // Navigation property
        public Category? Category { get; set; }
    }
}
