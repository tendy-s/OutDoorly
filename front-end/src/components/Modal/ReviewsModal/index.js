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
import { useDispatch } from "react-redux";
import { submitUserReview } from "../../../redux/ParkDetails/ParkDetails.slice";
import { postParkReview } from "../../../redux/ParkDetails/ParkDetails.thunks";


export default function ReviewsModal(props) {
  const setVisible = props.setVisible;
  const [open, setOpen] = useState(true);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  function handleClose() {
    setVisible(false);
  }


  function handleUpload() {
    dispatch(
      postParkReview({
        comment: comment,
        userName: name,
        userID: Math.random(9999999),
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
          <TextField
            id="outlined-multiline-static"
            sx={{ mb: 3, mt: 1 }}
            size="small"
            label="Review Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className={styles.modalTextField}
            margin={"small"}
            id="outlined-multiline-static"
            label="Review Description"
            multiline
            rows={3}
            onChange={(e) => setComment(e.target.value)}
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
