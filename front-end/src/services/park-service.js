import axios from "axios";
import {
  getActivitiesRoute,
  getActivitiesSearchRoute,
  getParkDetailsRoute,
} from "../routes";

export function getActivites() {
  return axios.get(getActivitiesRoute());
}

export function getParksByActivity(activites) {
  const url = getActivitiesSearchRoute(activites.map((a) => a.value).join(","));
  console.log(url);
  return axios.get(url);
}

export function getParkDetails(parkCode) {
  return axios.get(getParkDetailsRoute(parkCode));
}
