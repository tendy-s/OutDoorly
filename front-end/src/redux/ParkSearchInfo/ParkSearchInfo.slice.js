import { createSlice } from "@reduxjs/toolkit";
import {
  fetchParkActivities,
  retrieveParkDetails,
  searchForParks,
} from "./ParkSearchInfo.thunks";

const INITIAL_STATE = {
  loading: false,
  searchActivities: [],
  searchStates: [],
  searchAmenities: [],
  activityOptions: [],
  searchResults: [],
  selectedParkCode: undefined,
  parkDetails: undefined,
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
    setSelectedParkCode: (state, action) => {
      state.selectedParkCode = action.payload;
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
      })
      .addCase(searchForParks.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchForParks.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.data;
      })
      .addCase(searchForParks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(retrieveParkDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(retrieveParkDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.parkDetails = action.payload.data[0];
      })
      .addCase(retrieveParkDetails.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  setSearchActivities,
  setSearchAmenities,
  setSearchStates,
  setSelectedParkCode,
} = parkSearchSlice.actions;

export default parkSearchSlice.reducer;
