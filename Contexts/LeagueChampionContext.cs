#nullable disable
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Contexts;
public class LeagueChampionContext : DbContext
{

    //Opprettere database
    public LeagueChampionContext(DbContextOptions<LeagueChampionContext> options) : base(options) { }
    public DbSet<LeagueChampion> LeagueChampions { get; set; }
}


