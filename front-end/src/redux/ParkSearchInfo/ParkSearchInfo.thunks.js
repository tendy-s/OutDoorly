import { createAsyncThunk } from "@reduxjs/toolkit";
import { getActivities } from "../../services/park-service";

export const fetchParkActivities = createAsyncThunk(
  "parkSearchInfo/fetchParkActivities",
  async () => {
    const activitiesRes = await getActivities();
    return activitiesRes.data;
  }
);
