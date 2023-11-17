import React from "react";
import "./Game.css";
import Monster from "./Monster";
import PlayerList from "./PlayerList";
import { useSelector } from "react-redux";
import GameOver from "./GameOver";
import Victory from "./Victory";

const App = () => {
  const status = useSelector((state) => state.fight.status);

  return (
    <div className="App">
      {status === "ONGOING" ? (
        <>
          <Monster />
          <br></br>
          <section className="container-fluid">
            <PlayerList />
          </section>
        </>
      ) : status === "LOSE" ? (
        <GameOver />
      ) : (
        <Victory />
      )}
    </div>
  );
};

export default App;
