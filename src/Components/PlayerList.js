import React from "react";
import PlayerCard from "./PlayerCard";
import { useSelector } from "react-redux";

const PlayerList = () => {
  const players = useSelector(store => store.fight.players);

  return (
  <div className="row">
    {players.map((player, index) => (
      <PlayerCard key={index} player={player} />
    ))}
  </div>
  )
};

export default PlayerList;
