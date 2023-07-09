import { createSlice } from "@reduxjs/toolkit";
import {
  retrieveParkDetails,
  retrieveParkReviews,
  postParkReview,
  retrieveParkImages,
  postParkImage,
} from "./ParkDetails.thunks";
import { DEFAULT_REVIEWS } from "./defaultReviews";

const INITIAL_STATE = {
  details: undefined,
  userReviews: [],
	userImages: [],
  currImageID: 1,
  currReviewID: 4,
  loading: false,
};

const parkDetailsSlice = createSlice({
  name: "parkDetails",
  initialState: INITIAL_STATE,
  reducers: {
    submitUserReview: (state, action) => {
      return { ...state, review: action.payload };
    },
    submitUserImage: (state, action) => {
      state.parkDetails.images.push({
        ...action.payload,
        id: state.currImageID,
      });
      state.currImageID++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveParkDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(retrieveParkDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(retrieveParkDetails.rejected, (state) => {
        state.loading = false;
      })

      .addCase(retrieveParkReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(retrieveParkReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.userReviews = action.payload;
      })
      .addCase(retrieveParkReviews.rejected, (state) => {
        state.loading = false;
      })

      .addCase(postParkReview.pending, (state) => {
        state.loading = true;
      })
      .addCase(postParkReview.fulfilled, (state, action) => {
        state.loading = false;
        state.userReviews = action.payload;
      })
      .addCase(postParkReview.rejected, (state) => {
        state.loading = false;
      })

      .addCase(retrieveParkImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(retrieveParkImages.fulfilled, (state, action) => {
        state.loading = false;
        state.userImages = action.payload;
      })
      .addCase(retrieveParkImages.rejected, (state) => {
        state.loading = false;
      })

      .addCase(postParkImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(postParkImage.fulfilled, (state, action) => {
        state.loading = false;
        state.userImages = action.payload;
      })
      .addCase(postParkImage.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { submitUserReview, submitUserImage } = parkDetailsSlice.actions;
export default parkDetailsSlice.reducer;
