import { createSlice } from "@reduxjs/toolkit";
import {
  fetchParkActivities,
  retrieveParkDetails,
  searchForParks,
} from "./ParkSearchInfo.thunks";

const DEFAULT_REVIEWS = [
  {
    id: 1,
    userName: "Tendy",
    comment: "Don't forget bear spray",
    experienceRating: 4,
    createdAt: "2023-06-15",
  },
  {
    id: 2,
    userName: "Babak",
    comment: "Hydration is key",
    experienceRating: 4,
    createdAt: "2023-06-10",
  },
  {
    id: 3,
    userName: "Tendy Jr.",
    comment: "Don't stand on a cliff to take a photo",
    experienceRating: 1,
    createdAt: "2023-06-01",
  },
];

const INITIAL_STATE = {
  loading: false,
  searchActivities: [],
  searchStates: [],
  searchAmenities: [],
  activityOptions: [],
  searchResults: [],
  selectedParkCode: undefined,
  parkDetails: undefined,
  currReviewID: 4,
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
    submitUserReview: (state, action) => {
      state.parkDetails.userReviews.push({
        ...action.payload,
        id: state.currReviewID,
      });
      state.currReviewID++;
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
        state.parkDetails.userReviews = DEFAULT_REVIEWS;
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
  submitUserReview,
} = parkSearchSlice.actions;

export default parkSearchSlice.reducer;
