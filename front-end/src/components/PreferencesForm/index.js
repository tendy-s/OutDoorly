import styles from "./preferences-form.module.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import DistanceSearch from "./distance-search";
import PreferenceSearch from "./preference-search";

const DISTANCE_SEARCH = "Distance ";
const PREFERENCES_SEARCH = "Preferences ";

export default function PreferencesForm() {
  const [search, setSearch] = useState(PREFERENCES_SEARCH);

  function toggleSearch() {
    if (search === PREFERENCES_SEARCH) {
      setSearch(DISTANCE_SEARCH);
    } else {
      setSearch(PREFERENCES_SEARCH);
    }
  }
  return (
    <>
      <Typography sx={{mt:3}} variant="h4"> Searching by</Typography>
      <Button sx={{mt:1}} onClick={toggleSearch} size='large' className={styles.formButton}> {search} </Button>
      {search === PREFERENCES_SEARCH ? (
        <PreferenceSearch />
      ) : (
        <DistanceSearch />
      )}
    </>
  );
}
