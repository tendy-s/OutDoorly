import Backdrop from "@mui/material/Backdrop";
import {
  Modal,
  Fade,
  Box,
  Typography,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import { useState } from "react";
import styles from "./reviews-modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { postParkReview } from "../../../redux/ParkDetails/ParkDetails.thunks";
import { hashToken } from "../../../services/park-service";

export default function ReviewsModal(props) {
  const setVisible = props.setVisible;
  const [open, setOpen] = useState(true);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  function handleClose() {
    console.log(user);
    setVisible(false);
  }

  function handleUpload() {
    dispatch(
      postParkReview({
        comment: comment,
        userName: user.name,
        userID: hashToken(user.name + props.parkName),
        title: "test",
        experienceRating: rating,
      })
    );
    props.setAlert(true);
    handleClose();
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}>
      <Fade in={open}>
        <Box
          sx={{
            bgcolor: "background.paper",
          }}
          className={styles.modalBox}>
          <Typography
            className={styles.modalHeader}
            id="transition-modal-title"
            variant="h6"
            component="h2">
            Add a Review
          </Typography>
          <span sx={{ m: 3 }}>
            Review Name: <span style={{ color: "#667761" }}>{user.name}</span>
          </span>
          <TextField
            className={styles.modalTextField}
            margin={"small"}
            id="outlined-multiline-static"
            label="Review Description"
            multiline
            rows={3}
            onChange={(e) => setComment(e.target.value)}
            sx={{ mt: 1.5 }}
          />
          <Rating
            className={styles.modalRating}
            name="no-value"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Button onClick={handleUpload} className={styles.modalSubmit}>
            Submit
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
