import React from "react";
import PlayerCard from "./PlayerCard";
import { useSelector } from "react-redux";

const PlayerList = () => {
  const players = useSelector(store => store.fight.players);

  return (
  <div className="row">
    {players.map((player, index) => 
      player.pv > 0 ?
    (
      <PlayerCard key={index} player={player} />
    ) : (
      <p key={index} className="textWhite" >{player.name} est mort ...</p>
    )
    
    )}
  </div>
  )
};

export default PlayerList;
