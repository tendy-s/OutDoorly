import axios from "axios";
import { getActivitiesRoute, getActivitiesSearchRoute } from "../routes";

export function getActivites() {
  return axios.get(getActivitiesRoute());
}

export function getParksByActivity(activites) {
  const url = getActivitiesSearchRoute(activites.map((a) => a.value).join(","));
  console.log(url);
  return axios.get(url);
}
