import ILeagueChampion from "../../interfaces/ILeagueChampions";
import { Card, Button } from "react-bootstrap";
import { FC } from "react";

// Typet props til leaguechampions-komponent
interface LeagueChampionProps {
  champion: ILeagueChampion;
  deleteChampionHandler?: (id: number | undefined) => Promise<any>;
}

/**
 * LeagueChampion
 * Komponent som viser en Champion
 */
export const LeagueChampion: FC<LeagueChampionProps> = ({
  champion,
  deleteChampionHandler,
}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="cards">
        <Card.Title>
          <h2 id="all-champs-h2">{champion.name}</h2>
        </Card.Title>
        <p>Champion ReleaseYear: {champion.releaseYear}</p>
        <p>Champion Origin: {champion.origin}</p>
        <p>Id: {champion.id}</p>
        <img
          src={champion.image}
          className="show-all-champs-img"
          alt={"Bilde av " + champion.name}
        />
        <div style={{ display: "flex" }}>
          {deleteChampionHandler && (
            <Button
              variant="warning"
              size="sm"
              onClick={() => {
                if (!champion.id) return;
                deleteChampionHandler(champion.id);
                window.location.reload();
              }}
            >
              Delete champion
            </Button>
          )}

          <Button
            size="sm"
            variant="info"
            href={"/UpdateChampion?id=" + champion.id}
          >
            Update champion
          </Button>
        </div>
      </div>
    </div>
  );
};
