import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';

const PlayerCard = ({ player }) => {

    return (
        <div key={player.id} className="col-sm-3 card center position-relative" id={`joueur${player.id}`}>
            
            {!player.canPlay &&
                <div className='cantPlay'></div>
            }

            <div className="card-body text-center">
                <h5 className="card-title">{player.name}</h5>
                <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">
                    <div >
                        <ButtonCapacity playerId={player.id} playerCanPlay={player.canPlay} />
                        <ButtonCapacity playerId={player.id} playerCanPlay={player.canPlay} />
                        <ButtonCapacity playerId={player.id} playerCanPlay={player.canPlay} />
                        <ButtonCapacity playerId={player.id} playerCanPlay={player.canPlay} />

                    </div>
                </div >
            </div >

        </div >
    )
  };


export default PlayerCard;