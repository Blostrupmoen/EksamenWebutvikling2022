using Microsoft.AspNetCore.Mvc;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment hosting;

    public ImageUploadController(IWebHostEnvironment _hosting)
    {
        hosting = _hosting;
    }

    [HttpGet]
    public string Get()
    {
        // Ta en parameter (Bildenavnet)
        // Returnere Bildedataen
        return "Det funker!";
    }

    [HttpPost]
    public IActionResult SaveImage(IFormFile file)
    {
        string wwwrootPath = hosting.WebRootPath;
        System.Diagnostics.Debug.WriteLine(wwwrootPath);
        string absolutePath = Path.Combine($"{wwwrootPath}/images/{file.FileName}");
        

        using (var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            file.CopyTo(fileStream);
        }

        return Ok($"https://localhost:7259/images/{file.FileName}");

    }
}
