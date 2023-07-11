import axios from "axios";
import {
  getActivitiesRoute,
  getActivitiesSearchRoute,
  getAmenitiesRoute,
  getAppActivitiesSearchRoute,
  getAppParkDetailsRoute,
  getParkDetailsRoute,
  getProximitySearchRoute,
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
}

export function getParksByPreferences(
  activities,
  usStates,
  amenities,
  sort,
  page
) {
  return axios.get(
    getAppActivitiesSearchRoute(usStates, activities, amenities, sort, page)
  );
}

export function getParkDetails(id) {
  return axios.get(getAppParkDetailsRoute(id));
}
