using System.ComponentModel.DataAnnotations;
using System.Data;

namespace MvcNews_2.Models
{
    public class NewsItem
    {
        public int Id { get; set; }
        public DateTime TimeStamp { get; set; }

        [Required(ErrorMessage = "Treść newsa jest wymagana.")]
        [StringLength(140, MinimumLength = 5, ErrorMessage = "Treść newsa musi mieć od 5 do 140 znaków.")]
        public string Text { get; set; }

        [Timestamp]
        public byte[]? RowVersion { get; set; }
    }
}
