import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  searchActivities: [],
  searchStates: [],
  searchAmenities: [],
};

const parkSearchSlice = createSlice({
  name: "parkSearchInfo",
  initialState: INITIAL_STATE,
  reducers: {
    setSearchActivities: (state, action) => {
      state.searchActivities = action.payload;
    },
    setSearchStates: (state, action) => {
      state.searchStates = action.payload;
    },
    setSearchAmenities: (state, action) => {
      state.searchAmenities = action.payload;
    },
  },
});

export const { setSearchActivities, setSearchAmenities, setSearchStates } =
  parkSearchSlice.actions;

export default parkSearchSlice.reducer;
