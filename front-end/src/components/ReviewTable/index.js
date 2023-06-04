import styles from "./review-table.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export function ReviewTable() {
  return (
    <List className={styles.reviewsList}>
      <ListItem className={styles.reviewsListItem}>
        <ListItemAvatar>
          <Avatar alt="Anonymous" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Amazing!"
          secondary={<p>This is my favourite park.</p>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Anonymous" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Breathtaking"
          secondary={<p>I highly recommend this.</p>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Anonymous" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Wow"
          secondary={<p>Don't forget bear spray!</p>}
        />
      </ListItem>
    </List>
  );
}
