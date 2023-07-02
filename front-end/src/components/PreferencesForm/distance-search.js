import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRoutes } from "../../routes";
import { useState } from "react";
import Typography from "@mui/material/Typography"
import styles from "./preferences-form.module.scss";

import {
  setSearchDistance,
  setSearchMode,
  setSearchCity,
} from "../../redux/ParkSearchInfo/ParkSearchInfo.slice";

import Slider from "@mui/material/Slider";
import PlacesAutoComplete from "../PlacesAutoComplete";

export default function DistanceSearch() {
  const [distanceValue, setDistanceValue] = useState(45);
  const [selectedCity, setSelectedCity] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmitDistanceSearch() {
    dispatch(setSearchMode("PROXIMITY"));
    dispatch(setSearchCity(selectedCity));
    dispatch(setSearchDistance(distanceValue));
    navigate(getRoutes().searchResults);
  }

  const handleChange = (event, newValue) => {
    setDistanceValue(newValue);
  };

  function valuetext(value) {
    return `${value}km`;
  }

  return (
    <div className={styles.formWrapper}>
      <Typography variant="h5" sx={{ mt: 3, mb: 2, fontWeight: "medium" }}>
        {" "}
        Which city are you located in?
      </Typography>
      <PlacesAutoComplete onChange={setSelectedCity} />
      <Typography variant="h5" sx={{ mt: 3, mb: 2, fontWeight: "medium" }}>
        {" "}
        How far are you willing to travel? (in km)
      </Typography>

      <Slider
        className={styles.slider}
        value={distanceValue}
        onChange={handleChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
      />

      <Button variant="contained" onClick={onSubmitDistanceSearch}>
        Search parks
      </Button>
    </div>
  );
}
