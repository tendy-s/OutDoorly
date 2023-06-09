import { AppBar } from "@mui/material";
import styles from "./navigation-bar.module.scss";
import HikingIcon from "@mui/icons-material/Hiking";
import { useNavigate } from "react-router-dom";
import { getRoutes } from "../../routes";

export function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navBar}>
      <AppBar position="static">
        <div
          className={styles.pageName}
          onClick={() => {
            navigate(getRoutes().home);
          }}
        >
          <div className={styles.appName}>
            <h1>
              OutDoorly <HikingIcon />
            </h1>
          </div>
        </div>
      </AppBar>
    </div>
  );
}
