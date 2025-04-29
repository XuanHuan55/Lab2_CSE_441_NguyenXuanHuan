using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Q1WebAPI.Models
{
    public class Book
    {
        [Key]
        [Column("BookId")]
        public int BookId { get; set; }

        [Required]
        [Column("Name")]
        public string Name { get; set; }

        [Required]
        [Column("Description")]
        public string Description { get; set; }

        [Column("Price")]
        public decimal Price { get; set; }

        [Required]
        [Column("Note")]
        public string Note { get; set; }
    }
}
