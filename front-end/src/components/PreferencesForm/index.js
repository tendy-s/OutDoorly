import Button from "@mui/material/Button";
import styles from "./preferences-form.module.scss";
import { useNavigate } from "react-router-dom";
import { getRoutes } from "../../routes";
import { useEffect, useState } from "react";
import { getActivites } from "../../services/park-service";
import { Checkbox, Grid } from "@mui/material";

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
      <Grid container spacing={2}>
        {activities.map((a) => (
          <Grid item xs={6}>
            {/* <p>{a.name}</p> */}
            <label>
              <Checkbox /> {a.name}
            </label>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        onClick={() => navigate(getRoutes().searchResults)}
      >
        Find parks
      </Button>
    </div>
  );
}
