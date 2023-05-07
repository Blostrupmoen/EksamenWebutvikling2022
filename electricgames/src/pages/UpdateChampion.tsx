import { FC, useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import LeagueChampionService from "../services/LeagueChampionService";
import ILeagueChampion from "../interfaces/ILeagueChampions";
import { idText } from "typescript";
import { Form, Button } from "react-bootstrap";

export const UpdateChampion: FC = () => {
  const [searchParams] = useSearchParams();
  const [championId, setChampionId] = useState<number>(0);
  const [updateChampionName, setUpdateChampionName] = useState<string>("");
  const [updateChampionReleaseYear, setUpdateChampionReleaseYear] = useState<
    number | null
  >();
  const [updateChampionOrigin, setUpdateChampionOrigin] = useState<string>("");

  const [updateImageFile, setUpdateImageFile] = useState<File | null>(null);

  useEffect(() => {
    const preId = searchParams.get("id"); // Henter id fra url, hvis den eksisterer
    if (preId) {
      setChampionId(Number(preId));
    }
  }, [searchParams]);

  const setUpdateImageFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files != null) {
      const file = files[0];
      setUpdateImageFile(file);
    }
  };

  return (
    <>
      <h1>Update champion</h1>
      <Form
        className="update-champion-container"
        onSubmit={(e) => e.preventDefault()} // Ikke reload side ved submit
      >
        <div>
          <Form.Label htmlFor="id-to-update">Id: </Form.Label>
          <Form.Control
            name="id-to-update"
            type="number"
            placeholder="Id to change"
            required
            value={championId}
            onChange={(event) => {
              setChampionId(Number(event.target.value));
            }}
          />

          <Form.Label htmlFor="update-champion-name">Champion name:</Form.Label>
          <Form.Control
            name="update-champion-name"
            type="text"
            placeholder="New name"
            required
            value={updateChampionName}
            onChange={(event) => {
              setUpdateChampionName(event.target.value);
            }}
          />
          <Form.Label htmlFor="update-champion-releaseyear">
            Realese Year:
          </Form.Label>
          <Form.Control
            name="update-champion-releaseyear"
            type="number"
            placeholder="ReleaseYear"
            required
            value={updateChampionReleaseYear ?? ""}
            onChange={(event) => {
              setUpdateChampionReleaseYear(Number(event.target.value));
            }}
          />
          <Form.Label htmlFor="update-champion-origin">
            Champion origin
          </Form.Label>
          <Form.Control
            name="update-champion-origin"
            type="text"
            placeholder="New origin"
            required
            value={updateChampionOrigin}
            onChange={(event) => {
              setUpdateChampionOrigin(event.target.value);
            }}
          />

          <div>
            <h2>Upload picture</h2>
            <Form.Label htmlFor="update-champion-img">
              Choose your picture
            </Form.Label>
            <Form.Control
              name="update-champion-img"
              type="file"
              onChange={setUpdateImageFileHandler}
              required
            />
          </div>
        </div>
        <Button
          variant="primary"
          className="update-champion-btn"
          onClick={async () => {
            if (!updateImageFile || !championId) return;
            const imageUrl = await LeagueChampionService.uploadChampionImage(
              updateImageFile
            );
            const data: ILeagueChampion = {
              id: championId,
              name: updateChampionName,
              releaseYear: updateChampionReleaseYear ?? 2000,
              origin: updateChampionOrigin,
              image: imageUrl,
            };
            console.log(data);

            LeagueChampionService.updateChampion(data).then((data) =>
              console.log(data)
            );
          }}
        >
          Update champion
        </Button>
      </Form>
    </>
  );
};
