import styles from "./result-list-item.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Typography } from "@mui/material";

export default function ResultListItem({
  fullName,
  parkID,
  description,
  images,
  distance,
}) {
  return (
    <div className={styles.parkContainer}>
      <Card>
        <CardContent>
          <div
            className={styles.listItemWrapper}
            onClick={() => (window.location.href = `/park-details/${parkID}`)}>
            <Typography sx={{ fontSize: 30 }}>{fullName}</Typography>
            {distance && <h4>Distance: {distance.toFixed(2)} km</h4>}
            <div className={styles.resultsWrapper}>
              <img
                className={styles.previewImage}
                src={images[0].url}
                alt={images[0].altText}
              />
              <div className={styles.previewText}>
                <div>{description}</div>
                <div>
                  <Button className={styles.moreDetailsButton}>
                    More details
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
