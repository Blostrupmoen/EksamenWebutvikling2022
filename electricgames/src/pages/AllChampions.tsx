import { FC, useState, useEffect } from "react";
import ILeagueChampion from "../interfaces/ILeagueChampions";
import LeagueChampionService from "../services/LeagueChampionService";
import { LeagueChampion } from "../components/Champion";

export const AllChampions: FC = () => {
  const [leagueChampion, setLeagueChampion] = useState<ILeagueChampion[]>([]); // setter state for alle champions

  useEffect(() => {
    LeagueChampionService.getAllLeagueChampions().then((data) => {
      // henter alle champions når komponentet rendres
      setLeagueChampion(data);
    });
  }, []);

  const deleteChampionHandler = async (id?: number) => {
    // Sletter champion etter id hvis id ikke er null
    if (!id) {
      return null;
    }

    const result = await LeagueChampionService.deleteChampionById(id);
    return result;
  };

  return (
    <div className="container" id="all-champs-container">
      <div className="row">
        {leagueChampion.map((champion, index) => {
          return (
            <LeagueChampion
              champion={champion}
              key={index}
              deleteChampionHandler={() => deleteChampionHandler(champion.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
