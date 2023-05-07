import { FC, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import ILeagueChampion from "../interfaces/ILeagueChampions";
import LeagueChampionService from "../services/LeagueChampionService";
import Button from "react-bootstrap/Button";
import { LeagueChampion } from "../components/Champion";

export const SearchChampion: FC = () => {
  //lager og setter state for en/eller flere champions, og lager og setter state for id, name , origin og releaseyear
  const [selectedChamp, setSelectedChamp] = useState<ILeagueChampion[]>([]);

  const [searchId, setSearchId] = useState<number | undefined>(undefined);

  const [searchName, setSearchName] = useState<string>("");

  const [searchOrigin, setSearchOrigin] = useState<string>("");

  const [searchReleaseYear, setSearchReleaseYear] = useState<
    number | undefined
  >(undefined);

  const searchById = async (id: number) => {
    LeagueChampionService.getLeagueChampionById(id).then((data) => {
      if (!data?.length) return; //Sjekker om det ekstesterer data før den henter en champion etter id.
      setSelectedChamp(data);
    });
  };

  const searchByName = async (name: string) => {
    LeagueChampionService.getLeagueChampionByName(name).then((data) => {
      if (!data?.length) return;
      setSelectedChamp(data);
    });
  };

  const searchByOrigin = async (origin: string) => {
    LeagueChampionService.getLeagueChampionByOrigin(origin).then((data) => {
      if (!data?.length) return;
      setSelectedChamp(data);
    });
  };

  const searchByReleaseYear = async (releaseYear: number) => {
    LeagueChampionService.getLeagueChampionByReleaseyear(releaseYear).then(
      (data) => {
        if (!data?.length) return;
        setSelectedChamp(data);
      }
    );
  };

  return (
    <>
      <h1>Search for a champion</h1>
      <div className="search-champion">
        <div className="search-champion-container">
          <Form
            className="search-champion-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (!searchId) return;
              searchById(searchId);
            }}
          >
            <Form.Label htmlFor="search-champion-id">Search by id</Form.Label>
            <Form.Control
              name="search-champion-id"
              type="number"
              placeholder="Id to search"
              value={searchId}
              required
              onChange={(e) => setSearchId(Number(e.currentTarget.value))}
            ></Form.Control>
            <Button type="submit">Find Champion by id</Button>
          </Form>

          <Form
            className="search-champion-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (!searchName) return;
              searchByName(searchName);
            }}
          >
            <Form.Label htmlFor="search-champion-name">
              Search by Name
            </Form.Label>
            <Form.Control
              name="search-champion-name"
              type="text"
              placeholder="Name to search"
              value={searchName}
              required
              onChange={(e) => setSearchName(e.currentTarget.value)}
            ></Form.Control>
            <Button type="submit">Find Champion by name</Button>
          </Form>

          <Form
            className="search-champion-form"
            onSubmit={(e) => {
              //  submitter søk, hvis staten har verdier
              e.preventDefault();
              if (!searchOrigin) return;
              searchByOrigin(searchOrigin);
            }}
          >
            <Form.Label htmlFor="search-champion-origin">
              Search by Origin
            </Form.Label>
            <Form.Control
              name="search-champion-origin"
              type="text"
              placeholder="Origin to search"
              value={searchOrigin}
              required
              onChange={(e) => setSearchOrigin(e.currentTarget.value)}
            ></Form.Control>
            <Button type="submit">Find Champion by Origin</Button>
          </Form>

          <Form
            className="search-champion-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (!searchReleaseYear) return;
              searchByReleaseYear(searchReleaseYear);
            }}
          >
            <Form.Label htmlFor="search-champion-releaseyear">
              Search by Releaseyear
            </Form.Label>
            <Form.Control
              name="search-champion-releaseyear"
              type="number"
              placeholder="Releaseyear to search"
              value={searchReleaseYear}
              required
              onChange={(e) =>
                setSearchReleaseYear(Number(e.currentTarget.value))
              }
            ></Form.Control>
            <Button type="submit">Find Champion by releaseyear</Button>
          </Form>
        </div>
        <div style={{ display: "flex", flexFlow: "column" }}>
          {selectedChamp.map((champion, index) => {
            return <LeagueChampion champion={champion} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
