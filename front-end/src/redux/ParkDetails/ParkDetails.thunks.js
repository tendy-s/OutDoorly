import { createAsyncThunk } from "@reduxjs/toolkit";

import { getParkDetails, getReview } from "../../services/park-service";

export const retrieveParkDetails = createAsyncThunk(
	"parkDetails/retrieveParkDetails",
	async (_, thunkApi) => {
		const state = thunkApi.getState();
		const res = await getParkDetails(state.parkSearchInfo.selectedParkID);
		return res.data;
	}
);

export const retrieveParkReviews = createAsyncThunk(
	"parkDetails/retrieveReviews",
	async (_, thunkApi) => {
		const state = thunkApi.getState();
		const res = await getReview(state.parkDetails.details.id);
	}
);
