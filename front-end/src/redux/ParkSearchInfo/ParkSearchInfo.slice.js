import { createSlice } from "@reduxjs/toolkit";
import { fetchParkActivities } from "./ParkSearchInfo.thunks";

const INITIAL_STATE = {
  loading: false,
  searchActivities: [],
  searchStates: [],
  searchAmenities: [],
  activityOptions: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchParkActivities.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchParkActivities.fulfilled, (state, action) => {
        state.loading = false;
        state.activityOptions = action.payload.data.map((a) => {
          return { label: a.name, value: a.id };
        });
      })
      .addCase(fetchParkActivities.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSearchActivities, setSearchAmenities, setSearchStates } =
  parkSearchSlice.actions;

export default parkSearchSlice.reducer;
