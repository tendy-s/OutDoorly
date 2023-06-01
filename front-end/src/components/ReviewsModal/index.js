import Backdrop from "@mui/material/Backdrop";
import { Modal, Fade, Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import styles from "./reviews-modal.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ReviewsModal(props) {
  const setVisible = props.setVisible;
  const [open, setOpen] = useState(true);

  function handleClose() {
    setVisible(false);
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
      }}
    >
      <Fade in={open} className={styles.modalBox}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Add a Review
          </Typography>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
          />
          <Button href="#text-buttons">Submit</Button>
        </Box>
      </Fade>
    </Modal>
  );
}
