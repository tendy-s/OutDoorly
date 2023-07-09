import styles from "./review-table.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import { Rating } from "@mui/material";
import { useSelector } from "react-redux";

export function ReviewTable() {
  const reviews = useSelector((store) => store.parkDetails.userReviews);
  return (
    <List className={styles.reviewsList}>
      {reviews.map(
        ({ id, userName, comment, experienceRating, createdAt }, idx) => {
          return (
            <div key={id}>
              <ListItem className={styles.reviewsListItem}>
                <ListItemAvatar>
                  <Avatar className={styles.reviewsAvatar}>
                    <NaturePeopleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={userName} secondary={<p>{comment}</p>} />
                <Rating value={parseInt(experienceRating)} readOnly />
              </ListItem>
              {idx !== reviews.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </div>
          );
        }
      )}
    </List>
  );
}
