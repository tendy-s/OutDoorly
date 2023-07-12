import axios from "axios";
import {
  getActivitiesRoute,
  getActivitiesSearchRoute,
  getAmenitiesRoute,
  getAppActivitiesSearchRoute,
  getAppParkDetailsRoute,
  getProximitySearchRoute,
  getReviewRoute,
  getImageRoute,
  getParkDetailsRoute,
} from "../routes";

export function getActivities() {
  return axios.get(getActivitiesRoute());
}

export function getAmenities() {
  return axios.get(getAmenitiesRoute());
}

export function getParksByActivity(activites) {
  const url = getActivitiesSearchRoute(activites.map((a) => a.value).join(","));
  return axios.get(url);
}

export function getParksByProximity(city, state, radius, sortDir) {
  return axios.get(getProximitySearchRoute(city, state, radius, sortDir));


export function getParksByPreferences(activities, usStates, amenities, sort) {
  return axios.get(
    getAppActivitiesSearchRoute(usStates, activities, amenities, sort)
  );
}

export function getParkDetails(id) {
  return axios.get(getAppParkDetailsRoute(id));
}

export function getReview(id) {
  return axios.get(getReviewRoute(id));
}

export function postReview(id, review) {
  return axios({
    method: "post",
    url: getReviewRoute(id),
    data: review,
  });
}

export function deleteReview(id, userID) {
  return axios({
    method: "delete",
    url: getReviewRoute(id),
    data: {
      userID: userID,
    },
  });
}

export function getImage(id) {
  return axios.get(getImageRoute(id));
}

export function postImage(id, image) {
  console.log(image);
  var imageData = new FormData();
  imageData.append("image-upload", image);
  return axios({
    method: "post",
    url: getImageRoute(id),
    data: imageData,
    headers: { "Content-Type": "multipart/form-data" },
  });
}
