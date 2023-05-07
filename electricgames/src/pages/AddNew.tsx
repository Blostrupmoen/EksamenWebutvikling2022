import { FC, useState, ChangeEvent } from "react";
import ILeagueChampion from "../interfaces/ILeagueChampions";
import LeagueChampionService from "../services/LeagueChampionService";
import { Button, Form } from "react-bootstrap";

export const AddNew: FC = () => {
  const [newChampionName, setNewChampionName] = useState<string>(""); // state for å lage nytt champion-navn, og å sette dette
  const [newChampionReleaseYear, setNewChampionReleaseYear] = useState<
    // state for å lage nytt champion-releaseYear, og å sette dette
    number | null
  >();
  const [newChampionOrigin, setNewChampionOrigin] = useState<string>(""); // state for å lage nytt champion-origin, og å sette dette
  const [imageFile, setImageFile] = useState<File | null>(null); // state for å lage nytt champion-image-fil, og å sette denne

  const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files != null) {
      const file = files[0];
      setImageFile(file);
    }
  };

  return (
    <>
      <h1>Add new Champion</h1>
      <Form className="add-new-container" onSubmit={(e) => e.preventDefault()}>
        <div className="add-new-form">
          <Form.Label htmlFor="new-champion-name">Champion name</Form.Label>

          <Form.Control
            name="new-champion-name"
            placeholder="Champion name"
            type="text"
            required
            value={newChampionName}
            onChange={(event) => {
              setNewChampionName(event.target.value);
            }}
          />
          <Form.Label htmlFor="new-champion-releaseyear">
            Year of realese
          </Form.Label>
          <Form.Control
            name="new-champion-releaseyear"
            placeholder="Year of release"
            type="number"
            required
            value={newChampionReleaseYear ?? ""}
            onChange={(event) => {
              setNewChampionReleaseYear(Number(event.target.value));
            }}
          />
          <Form.Label htmlFor="new-champion-origin">Champion origin</Form.Label>
          <Form.Control
            name="new-champion-origin"
            placeholder="Champion Origin"
            type="text"
            required
            value={newChampionOrigin}
            onChange={(event) => {
              setNewChampionOrigin(event.target.value);
            }}
          />

          <div>
            <h2>Upload picture</h2>
            <Form.Label htmlFor="file-upload-for-champion">
              Choose your picture
            </Form.Label>
            <Form.Control
              name="file-upload-for-champion"
              onChange={setImageHandler}
              type="file"
              required
            />
          </div>
          <Button
            variant="primary"
            onClick={async () => {
              // Laster opp bildet og setter den til imageUrl
              if (!imageFile) return;
              const imageUrl = await LeagueChampionService.uploadChampionImage(
                imageFile
              );

              console.log("Lastet opp bilde", imageUrl);
              // Laster opp champion til server
              const data: ILeagueChampion = {
                name: newChampionName,
                releaseYear: newChampionReleaseYear ?? 2000,
                origin: newChampionOrigin,
                image: imageUrl,
              };
              const championResult =
                await LeagueChampionService.createNewChampion(data);
            }}
          >
            Add new champion
          </Button>
        </div>
      </Form>
    </>
  );
};
