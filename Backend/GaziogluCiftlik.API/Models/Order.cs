using System.ComponentModel.DataAnnotations;

namespace GaziogluCiftlik.API.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string CustomerName { get; set; } = string.Empty;

        [Required]
        [MaxLength(20)]
        public string CustomerPhone { get; set; } = string.Empty;

        [Required]
        [MaxLength(500)]
        public string CustomerAddress { get; set; } = string.Empty;

        public decimal TotalAmount { get; set; }

        [MaxLength(50)]
public string Status { get; set; } = "Pending"; // Pending, Shipped, Completed, Cancelled

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation property
        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}
