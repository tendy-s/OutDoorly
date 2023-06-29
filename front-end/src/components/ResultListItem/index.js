import styles from "./result-list-item.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Rating } from "@mui/material";

export default function ResultListItem({ fullName, parkCode }) {
  return (
    <div className={styles.parkContainer}>
      <Card>
        <CardContent>
          <div
            className={styles.listItemWrapper}
            onClick={() => (window.location.href = `/park-details/${parkCode}`)}
          >
            <h4>{fullName}</h4>
            <div className={styles.resultsWrapper}>
              <img
                className={styles.previewImage}
                src="https://images.unsplash.com/photo-1578305034054-6eb022b06c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                alt="temp-hobbiton"
              />{" "}
              <div className={styles.previewText}>
                <Rating name="read-only" readOnly defaultValue={4} />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>

                <div>
                  <Button className={styles.moreDetailsButton}>
                    More details here
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
