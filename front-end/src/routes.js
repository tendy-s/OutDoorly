export function getRoutes() {
  return {
    home: "/",
    searchResults: "/search-results",
    parkDetails: "/park-details/:id",
  };
}

export const PARKS_API_BASE_ROUTE = "https://developer.nps.gov/api/v1/";
export const PARKS_API_KEY = "tpKlhub2fE3bdPbvzHdMthRnjLj560SE0eLaBUKZ";
export const APP_API_BASE_ROUTE = "http://localhost:3001";

export function getProximitySearchRoute(city, state, radius) {
  return `${APP_API_BASE_ROUTE}/parks/?city=${city}&state=${state}&radius=${radius}`;
}

export function getAppActivitiesSearchRoute(state, activities, amenities) {
  return `${APP_API_BASE_ROUTE}/parks/?state=${state}${activities}${amenities}`;
}

export function getAppParkDetailsRoute(id) {
  return `${APP_API_BASE_ROUTE}/parks/${id}`;
}

// national parks API

export function getParkDetailsRoute(parkCode) {
  return `${PARKS_API_BASE_ROUTE}parks?parkCode=${parkCode}&api_key=${PARKS_API_KEY}`;
}

export function getAmenitiesRoute() {
  return `${PARKS_API_BASE_ROUTE}amenities?api_key=${PARKS_API_KEY}`;
}

export function getActivitiesRoute() {
  return `${PARKS_API_BASE_ROUTE}activities?api_key=${PARKS_API_KEY}`;
}

export function getActivitiesSearchRoute(ids) {
  return `${PARKS_API_BASE_ROUTE}activities/parks?id=${ids}&api_key=${PARKS_API_KEY}`;
}
