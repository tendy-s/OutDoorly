import { AppBar } from "@mui/material";
import styles from "./navigation-bar.module.scss";
import HikingIcon from "@mui/icons-material/Hiking";
import { useNavigate } from "react-router-dom";
import { getRoutes } from "../../routes";
import {
  USER_SESSION,
  isInLocalStorage,
  writeToLocalStorage,
} from "../../session";
import { Login } from "../../pages/login";

export function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navBar}>
      <AppBar
        position="static"
        // style={{ display: "flex", justifyContent: "space-between" }}
        className={styles.header}
      >
        <div
          className={styles.pageName}
          onClick={() => {
            navigate(getRoutes().home);
          }}
        >
          <HikingIcon className={styles.navIcon} />
          OutDoorly
        </div>
        {isInLocalStorage(USER_SESSION) ? (
          <div
            onClick={() => {
              localStorage.removeItem(USER_SESSION);
              window.location.reload();
            }}
          >
            Logout
          </div>
        ) : (
          <Login className={styles.login} />
          //   <div
          //     onClick={() => {
          //       navigate(getRoutes().login);
          //     }}
          //   >

          //   </div>
        )}
      </AppBar>
    </div>
  );
}
