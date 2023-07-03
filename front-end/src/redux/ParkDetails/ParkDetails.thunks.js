import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getParkDetails,
} from "../../services/park-service";

export const retrieveParkDetails = createAsyncThunk(
  "parkSearchInfo/retrieveParkDetails",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    console.log("PARK DETAILS FETCHING", state.parkSearchInfo.selectedParkID);

    const res = await getParkDetails(state.parkSearchInfo.selectedParkID);
    console.log("PARK DETAILS ", res);
    return res.data;
  }
);

export const retrieveParkReviews = createAsyncThunk(
  "parkDetails/reviews",
  async (_, thunkApi) => {}
);
