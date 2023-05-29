import Button from "@mui/material/Button";
import styles from "./preferences-form.module.scss";
import { useNavigate } from "react-router-dom";
import { getRoutes } from "../../routes";
import { useEffect, useState } from "react";
import { getActivites } from "../../services/park-service";
import { Checkbox, Grid } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function PreferencesForm() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function populateActivities() {
      const response = await getActivites();
      setActivities(response.data.data);
      console.log(response.data.data);
    }
    populateActivities();
  }, []);

  return (
    <div className={styles.formWrapper}>
      <h2>Which activities are you interested in?</h2>
      <Grid container spacing={2}>
        {activities.map((a) => (
          <Grid item sm={4}>
            {/* <p>{a.name}</p> */}
            <label>
              <Checkbox /> {a.name}
            </label>
          </Grid>
        ))}
      </Grid>
      <h2>Which state are you interested in visiting?</h2>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Arizona"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Arizona"
            control={<Radio />}
            label="Arizona"
          />
          <FormControlLabel
            value="California"
            control={<Radio />}
            label="California"
          />
          <FormControlLabel
            value="Washington"
            control={<Radio />}
            label="Washington"
          />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        onClick={() => navigate(getRoutes().searchResults)}
      >
        Find parks
      </Button>
    </div>
  );
}
