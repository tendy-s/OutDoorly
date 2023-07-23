import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthURLRoute } from "../../routes";
import { Button } from "@mui/material";
import styles from "./login.module.scss";
// import { getAuthURLRoute } from "../../../../back-end/shared/authenticate";

export const Login = () => {
  const [authURL, setAuthURL] = useState("");

  useEffect(() => {
    // Fetch the Google Auth URL from the server
    axios.get(getAuthURLRoute()).then((response) => {
      if (!authURL) {
        setAuthURL(response.data.googleURL);
      }
    });
    // console.log(getGoogleAuthURL());
  }, []);

  return (
    <div className={styles.login}>
      <Button variant="outlined">
        <a href={authURL}>Login with Google</a>
      </Button>
    </div>
  );
};
