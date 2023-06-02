import Backdrop from "@mui/material/Backdrop";
import { useRef } from "react";
import { Modal, Fade, Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./photos-modal.module.scss";

export default function PhotosModal(props) {
  const setVisible = props.setVisible;
  const [open] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const uploadRef = useRef();

  useEffect(() => {
    console.log(uploadedFiles);
  }, [uploadedFiles]);

  function handleClose() {
    setVisible(false);
  }

  function uploadPhoto() {
    uploadRef.current.click();
  }

  function handleUpload() {
    setUploadedFiles(uploadRef.current.files);
  }

  const displayUpload = Array.from(uploadedFiles).map((file) => {
    return (
      <img
        src={URL.createObjectURL(file)}
		alt="uploaded"
        className={styles.uploadImagePreview}
      />
    );
  });
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
            Add Photos
          </Typography>
          <input
            ref={uploadRef}
            accept="image/*"
            multiple
            hidden
            type="file"
            onChange={handleUpload}
          />
          <Button onClick={uploadPhoto} variant="contained">
            Upload Files
          </Button>
          {displayUpload}
          <Button className={styles.modalButton} onClick={handleClose}>Submit</Button>
        </Box>
      </Fade>
    </Modal>
  );
}
