import { createSlice } from "@reduxjs/toolkit";
import { retrieveParkDetails, retrieveParkReviews } from "./ParkDetails.thunks";
import { DEFAULT_REVIEWS } from "./defaultReviews";

const INITIAL_STATE = {
	details: undefined,
	userReviews: undefined,
	currImageID: 1,
	currReviewID: 4,
	loading: false,
};

const parkDetailsSlice = createSlice({
	name: "parkDetails",
	initialState: INITIAL_STATE,
	reducers: {
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
				state.details.userReviews = action.payload;
			})
			.addCase(retrieveParkReviews.rejected, (state) => {
				state.loading = false;
			});
	},
});

export const { submitUserReview, submitUserImage } = parkDetailsSlice.actions;
export default parkDetailsSlice.reducer;
