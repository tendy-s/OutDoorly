import axios from "axios";
import {
  getActivitiesRoute,
  getActivitiesSearchRoute,
  getAmenitiesRoute,
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

export function getParkDetails(parkCode) {
  return axios.get(getParkDetailsRoute(parkCode));
}
