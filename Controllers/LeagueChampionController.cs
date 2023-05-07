using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class LeagueChampionController : ControllerBase
{
    private readonly LeagueChampionContext context;


    public LeagueChampionController(LeagueChampionContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<LeagueChampion>>> Get()
    {
        try
        {
            List<LeagueChampion> leagueChampions = await context.LeagueChampions.ToListAsync();
            return Ok(leagueChampions);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<LeagueChampion>> GetById(int id) 
    {
        try {
        LeagueChampion? leagueChampion = await context.LeagueChampions.FindAsync(id);
        
        return Ok(leagueChampion);
        }
        catch {
            return StatusCode(404);
        }

    }

    [HttpGet]
    [Route("[action]/{name}")]
    public async Task<ActionResult<LeagueChampion>> Name(string name)
        {
        try {
            
            var leagueChampion = await context.LeagueChampions.Where(champion => champion.Name == name).ToListAsync();
            return Ok(leagueChampion);
        }
        catch {
            return StatusCode(404);
        }

    }

    [HttpGet]
    [Route("[action]/{origin}")]
    public async Task<ActionResult<LeagueChampion>> Origin(string origin)
    {
        try {
            var leagueChampion = await context.LeagueChampions.Where(champion => champion.Origin == origin).ToListAsync();
            return Ok(leagueChampion);
        }
        catch {
            return StatusCode(404);
        }

    }

    [HttpGet]
    [Route("[action]/{ReleaseYear}")]
    public async Task<ActionResult<LeagueChampion>> ReleaseYear(int ReleaseYear)
    {
        try {
            var leagueChampion = await context.LeagueChampions.Where(champion => champion.ReleaseYear == ReleaseYear).ToListAsync();
            return Ok(leagueChampion);
        }
        catch {
            return StatusCode(404);
        }
    }
    

    [HttpPost]
    public IActionResult Post(LeagueChampion newLeagueChampion)
    {
        try
        {
            context.LeagueChampions.Add(newLeagueChampion);
            context.SaveChanges();
            return CreatedAtAction("Get", new { id = newLeagueChampion.Id }, newLeagueChampion);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try {
        LeagueChampion? leagueChampion = await context.LeagueChampions.FindAsync(id);
        if(leagueChampion != null) {
            context.LeagueChampions.Remove(leagueChampion);
            await context.SaveChangesAsync();
        }
        return NoContent();
        }
        catch {
            return StatusCode(500);
        }

    }

    [HttpPut]
    public async Task<IActionResult> Put(LeagueChampion updatedLeagueChampion)
    {
        context.Entry(updatedLeagueChampion).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }




}
