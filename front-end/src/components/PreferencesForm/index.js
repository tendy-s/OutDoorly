import Button from "@mui/material/Button";
import styles from "./preferences-form.module.scss";
import { useNavigate } from "react-router-dom";
import { getRoutes } from "../../routes";
import { useEffect, useState } from "react";
import { getAmenities } from "../../services/park-service";
import Select from "react-select";
import { STATE_OPTIONS } from "./state-codes";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchActivities,
  setSearchAmenities,
  setSearchCity,
  setSearchDistance,
  setSearchStates,
} from "../../redux/ParkSearchInfo/ParkSearchInfo.slice";
import { fetchParkActivities } from "../../redux/ParkSearchInfo/ParkSearchInfo.thunks";
import Slider from "@mui/material/Slider";
import PlacesAutoComplete from "../PlacesAutoComplete";

export default function PreferencesForm() {
  const navigate = useNavigate();
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [distanceValue, setDistanceValue] = useState(45);
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event, newValue) => {
    setDistanceValue(newValue);
  };
  const dispatch = useDispatch();
  const activities = useSelector(
    (store) => store.parkSearchInfo.activityOptions
  );

  useEffect(() => {
    dispatch(fetchParkActivities());
  }, []);

  useEffect(() => {
    async function populateAmenities() {
      const response = await getAmenities();
      setAmenities(
        response.data.data.map((amenity) => {
          return { label: amenity.name, value: amenity.id };
        })
      );
      console.log(response.data.data);
    }
    populateAmenities();
  }, []);

  function valuetext(value) {
    return `${value}km`;
  }

  function onSubmitSearch() {
    dispatch(setSearchActivities(selectedActivities));
    dispatch(setSearchCity(selectedCity));
    dispatch(setSearchStates(selectedStates));
    dispatch(setSearchAmenities(selectedAmenities));
    navigate(getRoutes().searchResults);
    dispatch(setSearchDistance(distanceValue));
  }

  return (
    <div className={styles.formWrapper}>
      <h1>Find parks based on one of the following two options:</h1>
      <h2>1. Which city are you located in?</h2>
      <PlacesAutoComplete onChange={setSelectedCity} />
      <h2>2. How far are you willing to travel? (in km)</h2>

      <Slider
        className={styles.slider}
        value={distanceValue}
        onChange={handleChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
      />

      <h1>OR</h1>
      <h2>1. Which activities are you interested in?</h2>

      <Select
        options={activities}
        className={styles.selector}
        onChange={(v) => setSelectedActivities(v)}
        isMulti
        placeholder="Select some activities"
      />
      <h2>2. Which amenities are you interested in?</h2>

      <Select
        options={amenities}
        className={styles.selector}
        onChange={(v) => setSelectedAmenities(v)}
        isMulti
        placeholder="Select some amenities"
      />
      <h2>3. Which state are you interested in visiting?</h2>

      <Select
        className={styles.selector}
        options={STATE_OPTIONS}
        onChange={(v) => setSelectedStates(v)}
        placeholder="Select a state"
      />
      <div className={styles.submitButton}>
        <Button variant="contained" onClick={onSubmitSearch}>
          Find parks
        </Button>
      </div>
    </div>
  );
}
