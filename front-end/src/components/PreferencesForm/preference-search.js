import styles from "./preferences-form.module.scss";
import { fetchParkActivities } from "../../redux/ParkSearchInfo/ParkSearchInfo.thunks";
import Button from "@mui/material/Button";
import { getAmenities } from "../../services/park-service";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRoutes } from "../../routes";
import Select from "react-select";
import Typography from "@mui/material/Typography";
import { STATE_OPTIONS } from "./state-codes";
import {
  setSearchActivities,
  setSearchAmenities,
  setSearchMode,
  setSearchStates,
} from "../../redux/ParkSearchInfo/ParkSearchInfo.slice";

export default function PreferenceSearch() {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  function onSubmitSearch() {
    dispatch(setSearchMode("PREFERENCES"));
    dispatch(setSearchActivities(selectedActivities));
    dispatch(setSearchStates(selectedStates));
    dispatch(setSearchAmenities(selectedAmenities));
    navigate(getRoutes().searchResults);
  }

  return (
    <div className={styles.formWrapper}>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: "medium" }}>
         Which activities are you interested in?
      </Typography>

      <Select
        options={activities}
        className={styles.selector}
        onChange={(v) => setSelectedActivities(v)}
        isMulti
        sx={{ mb:2 }}
        placeholder="Select some activities"
      />

      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: "medium" }}>
         Which amenities are you interested in?
      </Typography>

      <Select
        options={amenities}
        className={styles.selector}
        onChange={(v) => setSelectedAmenities(v)}
        isMulti
        sx={{ mt: 4, mb: 1, fontWeight: "medium" }}
        placeholder="Select some amenities"
      />
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: "medium" }}>
         Which state are you interested in visiting?
      </Typography>

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
