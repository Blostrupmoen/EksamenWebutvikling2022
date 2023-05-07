using System.ComponentModel.DataAnnotations;


using ElectricGamesApi.Interfaces;

namespace ElectricGamesApi.Models;


public class LeagueChampion : ILeagueChampion
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int ReleaseYear { get; set; }
    public string Origin { get; set; } = "";
    public string Image { get; set; } = "";

}