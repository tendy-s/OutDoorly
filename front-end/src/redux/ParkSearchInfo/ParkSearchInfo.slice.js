import { createSlice } from "@reduxjs/toolkit";
import {
  fetchParkActivities,
  retrieveParkDetails,
  searchForParks,
} from "./ParkSearchInfo.thunks";

export const A_TO_Z_SORTING = "A_Z_SORT";

export const Z_TO_A_SORTING = "Z_A_SORT";

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
  {
    id: 4,
    userName: "Michael",
    comment: "Cliff bars are delicious",
    experienceRating: 1,
    createdAt: "2023-06-01",
  },
  {
    id: 5,
    userName: "Syed",
    comment: "Cheap to drive to by electric car",
    experienceRating: 1,
    createdAt: "2023-06-01",
  },
  {
    id: 6,
    userName: "Has",
    comment: "Great for picnics",
    experienceRating: 1,
    createdAt: "2023-06-01",
  },
  {
    id: 7,
    userName: "Grizzly",
    comment: "I am friendly",
    experienceRating: 1,
    createdAt: "2023-06-01",
  },
  {
    id: 8,
    userName: "Cyote",
    comment: "Keep small dogs on leash",
    experienceRating: 1,
    createdAt: "2023-06-01",
  },
];

const INITIAL_STATE = {
  loading: false,
  searchActivities: [],
  searchStates: [],
  searchAmenities: [],
  searchCity: undefined,
  searchDistance: undefined,
  activityOptions: [],
  searchResults: [],
  selectedParkCode: undefined,
  parkDetails: undefined,
  currReviewID: 4,
  sortDir: A_TO_Z_SORTING,
  currImageID: 1,
};

const parkSearchSlice = createSlice({
  name: "parkSearchInfo",
  initialState: INITIAL_STATE,
  reducers: {
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
    submitUserImage: (state, action) => {
      state.parkDetails.images.push({
        ...action.payload,
        id: state.currImageID,
      });
      state.currImageID++;
    },
    toggleSort: (state) => {
      state.sortDir =
        state.sortDir === A_TO_Z_SORTING ? Z_TO_A_SORTING : A_TO_Z_SORTING;
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
  setSearchCity,
  setSearchDistance,
  submitUserReview,
  submitUserImage,
  toggleSort,
} = parkSearchSlice.actions;

export default parkSearchSlice.reducer;
