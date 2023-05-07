namespace ElectricGamesApi.Interfaces;



public interface ILeagueChampion
{
    int Id { get; set; }
    string Name { get; set; }
    int ReleaseYear { get; set; }
    string Origin { get; set; }
    string Image { get; set; }

}