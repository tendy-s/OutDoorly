import styles from "./result-list-item.module.scss";
import { getRoutes } from "../../routes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ResultListItem({ name, parkCode }) {
  return (
    <div className={styles.parkContainer}>
      <Card>
        <CardContent>
          <div
            className={styles.listItemWrapper}
            onClick={() => (window.location.href = `/park-details/${parkCode}`)}
          >
            {name}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
