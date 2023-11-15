import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // TODO : Compléter 'players' et 'monster'
  players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
  ],
  monster: {
    pv: 800,
    pvMax: 800,
  },
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
      state.monster.pv -= action.payload.monsterDecreasePv
    },
    hitBack: (state, action) => {
      state.players[action.payload.playerHit].pv -= action.payload.playerDecreasePv
    }
  },
});

export const { hitMonster, hitBack } = fightSlice.actions
export default fightSlice.reducer;
