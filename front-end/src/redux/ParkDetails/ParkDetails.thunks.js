import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getParkDetails,
  getReview,
  postReview,
  getImage,
  postImage,
} from "../../services/park-service";

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
    const reviews = res.data.reviews;
    return reviews;
  }
);

export const postParkReview = createAsyncThunk(
  "parkDetails/postReview",
  async (review, thunkApi) => {
    const state = thunkApi.getState();
    const res = await postReview(state.parkDetails.details.id, review).then(
      () => {
        return getReview(state.parkDetails.details.id);
      }
    );
    return res.data.reviews;
  }
);

export const postParkImage = createAsyncThunk(
  "parkDetails/postImage",
  async (image, thunkApi) => {
    const state = thunkApi.getState();
    const res = await postImage(state.parkDetails.details["_id"]).then(() => {
      return getImage(state.parkDetails.details.id);
    });
    return res.data.images;
  }
);

export const retrieveParkImages = createAsyncThunk(
  "parkDetails/retrieveImages",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const res = await getImage(state.parkDetails.details["_id"]);
    const images = res.data.images;
    return images;
  }
);
