import Button from "@mui/material/Button";
import styles from "./preferences-form.module.scss";
import { useNavigate } from "react-router-dom";
import { getRoutes } from "../../routes";
import { useEffect, useState } from "react";
import { getActivites, getAmenities } from "../../services/park-service";
import Select from "react-select";
import { STATE_OPTIONS } from "./state-codes";
import { useDispatch } from "react-redux";
import {
  setSearchActivities,
  setSearchAmenities,
  setSearchStates,
} from "../../redux/ParkSearchInfo/ParkSearchInfo.slice";

export default function PreferencesForm() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function populateActivities() {
      const response = await getActivites();
      setActivities(
        response.data.data.map((a) => {
          return { label: a.name, value: a.id };
        })
      );
      console.log(response.data.data);
    }
    populateActivities();
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

  function onSubmitSearch() {
    dispatch(setSearchActivities(selectedActivities));
    dispatch(setSearchStates(selectedStates));
    dispatch(setSearchAmenities(selectedAmenities));
    navigate(getRoutes().searchResults);
  }

  return (
    <div className={styles.formWrapper}>
      <h2>Which activities are you interested in?</h2>

      <Select
        options={activities}
        className={styles.selector}
        onChange={(v) => setSelectedActivities(v)}
        isMulti
        placeholder="Select some activities"
      />
      <h2>Which amenities are you interested in?</h2>

      <Select
        options={amenities}
        className={styles.selector}
        onChange={(v) => setSelectedAmenities(v)}
        isMulti
        placeholder="Select some amenities"
      />
      <h2>Which states are you interested in visiting?</h2>

      <Select
        className={styles.selector}
        options={STATE_OPTIONS}
        onChange={(v) => setSelectedStates(v)}
        isMulti
        placeholder="Select one or multiple states"
      />
      <div className={styles.submitButton}>
        <Button variant="contained" onClick={onSubmitSearch}>
          Find parks
        </Button>
      </div>
    </div>
  );
}
