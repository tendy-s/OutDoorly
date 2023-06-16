import styles from "./home.module.scss";
import PreferencesForm from "../../components/PreferencesForm";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <div className={styles.headingContainer}>
          <Typography
            fontWeight="fontWeightMedium"
            className={styles.titleHeading}>
            OutDoorly
          </Typography>
          <Typography className={styles.subHeading}>
            Exploring national parks in the US
          </Typography>
        </div>
        <img
          src="https://images.unsplash.com/photo-1565030784130-0e0ef4b06b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="yellowstone"
        />
      </div>
      <PreferencesForm />
    </div>
  );
}
