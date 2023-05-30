import Button from "@mui/material/Button";
import styles from "./preferences-form.module.scss";
import { useNavigate } from "react-router-dom";
import { getRoutes } from "../../routes";
import { useEffect, useState } from "react";
import { getActivites } from "../../services/park-service";
import { Checkbox, Grid } from "@mui/material";
import Select from "react-select";
import { STATE_OPTIONS } from "./state-codes";

export default function PreferencesForm() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);

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

  function handleChange(selectedOption) {
    console.log("Selected State: ", selectedOption.value);
  }

  return (
    <div className={styles.formWrapper}>
      <h2>Which activities are you interested in?</h2>
      {/* <Grid container spacing={2}>
        {activities.map((a) => (
          <Grid item sm={4}>
            <p>{a.name}</p>
            <label>
              <Checkbox /> {a.name}
            </label>
          </Grid>
        ))}
      </Grid> */}
      <Select
        options={activities}
        className={styles.selector}
        onChange={handleChange}
        isMulti
        placeholder="Select some activities"
      />
      <h2>Which states are you interested in visiting?</h2>

      <Select
        className={styles.selector}
        options={STATE_OPTIONS}
        onChange={handleChange}
        isMulti
        placeholder="Select one or multiple states"
      />
      <div className={styles.submitButton}>
        <Button
          variant="contained"
          onClick={() => navigate(getRoutes().searchResults)}
        >
          Find parks
        </Button>
      </div>
    </div>
  );
}
