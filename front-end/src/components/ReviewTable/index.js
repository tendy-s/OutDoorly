import styles from "./review-table.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import { Rating } from "@mui/material";

export function ReviewTable() {
  return (
    <List className={styles.reviewsList}>
      <ListItem className={styles.reviewsListItem}>
        <ListItemAvatar>
          <Avatar className={styles.reviewsAvatar}>
            <NaturePeopleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Amazing!"
          secondary={<p>This is my favourite park.</p>}
        />
        <Rating name="read-only" value={5} readOnly />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={styles.reviewsAvatar}>
            <NaturePeopleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Breathtaking"
          secondary={<p>I highly recommend this.</p>}
        />
        <Rating name="read-only" value={4} readOnly />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={styles.reviewsAvatar}>
            <NaturePeopleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Wow"
          secondary={<p>Don't forget bear spray!</p>}
        />
        <Rating name="read-only" value={4.5} readOnly />
      </ListItem>
    </List>
  );
}
