import { createSlice } from "@reduxjs/toolkit";
import { reBuildArray } from "../components/utils";

const initialState = {
  selectedSortAlgo: "",
  range: 80,
  isSorting: false,
  unSortedArr: reBuildArray(80),
};

export const globalSlice = createSlice({
  name: "configState",
  initialState: initialState,
  reducers: {
    setSelectedSortAlgo: (state, payload) => {
      console.log(payload.payload.selectedSort);
      state.selectedSortAlgo = payload.payload.selectedSort;
      return state;
    },
    setRange: (state, payload) => {
      state.range = payload.payload.range;
      return state;
    },
    setIsSorting: (state, payload) => {
      state.isSorting = payload.payload.isSorting;
      return state;
    },
    setUnSortedArr: (state, payload) => {
      state.unSortedArr = payload.payload.newUnsortedArr;
      return state;
    },
  },
});

export const { setSelectedSortAlgo, setRange, setIsSorting, setUnSortedArr } =
  globalSlice.actions;
export default globalSlice.reducer;
