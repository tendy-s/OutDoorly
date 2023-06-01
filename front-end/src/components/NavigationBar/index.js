import { AppBar } from "@mui/material";
import styles from "./navigation-bar.module.scss";
import HikingIcon from "@mui/icons-material/Hiking";

export function NavigationBar() {
  return (
    <div className={styles.navBar}>
      <AppBar position="static">
        <h1 className={styles.title}>
          OutDoorly <HikingIcon />
        </h1>
      </AppBar>
    </div>
  );
}
