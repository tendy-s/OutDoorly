import axios from "axios";
import { getActivitiesRoute } from "../routes";

export function getActivites() {
  return axios.get(getActivitiesRoute());
}
