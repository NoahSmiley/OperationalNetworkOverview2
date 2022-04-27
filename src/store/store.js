import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const coreConfig = createSlice({
  name: "coreConfig",
  initialState: {
    BATV: true,
    EDT: true,
    DT: true,
    PMAS: true,
    SIS: true,
    Ticker:true,
  },
  reducers: {
    setBATV(state, action) {
      state.BATV = !state.BATV;
    },
    setTicker(state, action) {
        state.Ticker = !state.Ticker;
      },
    setEDT(state, action) {
      state.EDT = !state.EDT;
    },
    setDT(state, action) {
      state.DT = !state.DT;
    },
    setPMAS(state, action) {
      state.PMAS = !state.PMAS;
    },
    setSIS(state, action) {
      state.SIS = !state.SIS;
    },
  },
});

const store = configureStore({
  reducer: {
    coreConfig: coreConfig.reducer,
  },
});
export default store;
export const coreActions = coreConfig.actions;
