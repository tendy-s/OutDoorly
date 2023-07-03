import axios from "axios";
import {
  getActivitiesRoute,
  getActivitiesSearchRoute,
  getAmenitiesRoute,
  getAppActivitiesSearchRoute,
  getAppParkDetailsRoute,
  getParkDetailsRoute,
  getProximitySearchRoute,
  getReviewRoute,
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

// TODO
export function getParksByProximity(city, state, radius) {
  return axios.get(getProximitySearchRoute(city, state, radius));
}

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

export function postReview(id) {
  return axios({
    method: "post",
    url: getReviewRoute(id),
    data: {},
  });
}
