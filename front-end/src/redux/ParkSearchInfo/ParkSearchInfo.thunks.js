import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getActivities,
  getParkDetails,
  getParksByActivity,
} from "../../services/park-service";

export const fetchParkActivities = createAsyncThunk(
  "parkSearchInfo/fetchParkActivities",
  async () => {
    const activitiesRes = await getActivities();
    return activitiesRes.data;
  }
);

export const searchForParks = createAsyncThunk(
  "parkSearchInfo/searchForParks",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const res = await getParksByActivity(state.parkSearchInfo.searchActivities);
    return res.data;
  }
);

export const retrieveParkDetails = createAsyncThunk(
  "parkSearchInfo/retrieveParkDetails",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const res = await getParkDetails(state.parkSearchInfo.selectedParkCode);
    return res.data;
  }
);
