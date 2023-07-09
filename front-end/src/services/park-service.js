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
	getImageRoute
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

export function postReview(id, review) {
  return axios({
    method: "post",
    url: getReviewRoute(id),
    data: review,
  });
}

export function getImage(id) {
  return axios.get(getImageRoute(id));
}


export function postImage(id, image) {
return axios({
	method: "post",
	url: getImageRoute(id),
	data: image
});
}
