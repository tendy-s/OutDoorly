import { createSlice } from "@reduxjs/toolkit";
import { fetchParkActivities, searchForParks } from "./ParkSearchInfo.thunks";

export const A_TO_Z_SORTING = "A_Z_SORT";

export const Z_TO_A_SORTING = "Z_A_SORT";


export const INCREASING = "INCREASING";

export const DECREASING = "DECREASING";

const INITIAL_STATE = {
  loading: false,
  searchMode: undefined,
  searchActivities: [],
  searchStates: [],
  searchAmenities: [],
  searchCity: undefined,
  searchDistance: undefined,
  activityOptions: [],
  searchResults: [],
  selectedParkID: undefined,
  sortDir: A_TO_Z_SORTING,
  distanceSortDir: INCREASING,
};

const parkSearchSlice = createSlice({
  name: "parkSearchInfo",
  initialState: INITIAL_STATE,
  reducers: {
    setSearchMode: (state, action) => {
      state.searchMode = action.payload;
    },
    setSearchActivities: (state, action) => {
      state.searchActivities = action.payload;
    },
    setSearchCity: (state, action) => {
      state.searchCity = action.payload;
    },
    setSearchDistance: (state, action) => {
      state.searchDistance = action.payload;
    },
    setSearchStates: (state, action) => {
      state.searchStates = action.payload;
    },
    setSearchAmenities: (state, action) => {
      state.searchAmenities = action.payload;
    },
    setSelectedParkID: (state, action) => {
      state.selectedParkID = action.payload;
    },
    toggleSort: (state) => {
      state.sortDir =
        state.sortDir === A_TO_Z_SORTING ? Z_TO_A_SORTING : A_TO_Z_SORTING;
    },
    toggleDistanceSort: (state) => {
      state.distanceSortDir =
        state.distanceSortDir === INCREASING ? DECREASING : INCREASING;
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
        console.log("ACTION ", action);
        state.searchResults = action.payload;
      })
      .addCase(searchForParks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  setSearchMode,
  setSearchActivities,
  setSearchAmenities,
  setSearchStates,
  setSelectedParkID,
  setSearchCity,
  setSearchDistance,
  submitUserReview,
  submitUserImage,
  toggleSort,
  toggleDistanceSort,
} = parkSearchSlice.actions;

export default parkSearchSlice.reducer;
