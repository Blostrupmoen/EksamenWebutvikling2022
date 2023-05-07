import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <header className="home-header">
        <h1>Electric games</h1>
        <h2>League of legends</h2>
      </header>

      <main className="home-main">
        <div className="home-section-p-container-top">
          <p>
            Welcome to Electric Games. On this site you will find information
            about many of the champions that exist in League of Legends, a game
            made in 2009 by Riot Games
          </p>
        </div>
        <div className="home-section-p-container-bottom">
          <p>
            The game is played by 10 people at the time, usually online and each
            player has to choose their own champion. All the champion varies,
            and they can impact the game in different ways by using their own
            unique abilities. League of Legends is still after 13 years one of
            the most played games around the world, and have about 117 million
            active monthly players.
          </p>
        </div>

        <Link to="/AllChampions">
          <button className="home-btn">Lets go look at some champions</button>
        </Link>
      </main>
    </div>
  );
};
