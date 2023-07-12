import styles from "./review-table.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import { Rating } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { deleteParkReview } from "../../redux/ParkDetails/ParkDetails.thunks";

export function ReviewTable() {
	const reviews = useSelector((store) => store.parkDetails.userReviews);
	const dispatch = useDispatch();


	function handleDelete(userID) {
		dispatch(deleteParkReview(userID));
	}

	return (
		<List className={styles.reviewsList}>
			{reviews.map(
				(review, idx) => {
					return (
						<div key={review.id}>
							<ListItem className={styles.reviewsListItem}>
								<ListItemAvatar>
									<Avatar className={styles.reviewsAvatar}>
										<NaturePeopleIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={review.userName} secondary={<p>{review.comment}</p>} />
								<Rating value={parseInt(review.experienceRating)} readOnly />
								<Delete onClick={() => { handleDelete(review.userID) }} className={styles.reviewsDelete} />
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
