import Button from "@mui/material/Button";
import styles from "./preferences-form.module.scss";
import { useNavigate } from "react-router-dom";
import { getRoutes } from "../../routes";

export default function PreferencesForm() {
  const navigate = useNavigate();
  return (
    <div className={styles.formWrapper}>
      Hi fill me out!
      <Button
        variant="contained"
        onClick={() => navigate(getRoutes().searchResults)}
      >
        Find parks
      </Button>
    </div>
  );
}
