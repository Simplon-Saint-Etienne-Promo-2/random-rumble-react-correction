import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // TODO : Compléter 'players' et 'monster'
  players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, canPlay: true },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, canPlay: true},
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, canPlay: true},
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, canPlay: true},
  ],
  monster: {
    pv: 800,
    pvMax: 800,
  },
  status: "ONGOING",
  playerPlayed: 0,
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      // state.monster = {
      //   ...state.monster,
      //   pv: state.monster.pv - action.payload.monsterDecreasePv
      // }
      
      if(state.monster.pv - action.payload.monsterDecreasePv > 0){
        state.monster.pv -= action.payload.monsterDecreasePv
      } else {
        state.monster.pv = 0;
        state.status = "WIN";
      }
    },
    hitBack: (state, action) => {
      if(state.players[action.payload.playerHit].pv - action.payload.playerDecreasePv > 0){
        state.players[action.payload.playerHit].pv -= action.payload.playerDecreasePv;
      } else {
        state.players[action.payload.playerHit].pv = 0;
        let count = 0;
        state.players.forEach(player => {
          if(player.pv === 0){
            count += 1;
          }
        })

        if( count === state.players.length){
          state.status = "LOSE";
        }
      }
    },
    endOfTurn: (state, action) => {
      state.players[action.payload.player].canPlay = false;
      if(state.playerPlayed + 1 === state.players.length){
        state.playerPlayed = 0;
        state.players.forEach(player => {
          player.canPlay = true;
        })
      } else {
        state.playerPlayed += 1;
      }
    }
  },
});

export const { hitMonster, hitBack, endOfTurn } = fightSlice.actions
export default fightSlice.reducer;
