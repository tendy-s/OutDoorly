import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getParkDetails } from "../../services/park-service";
import { Button, Tab, Tabs } from "@mui/material";
import { TabPanel } from "../../components/ParkDetailsTabPanel";
import ReviewsModal from "../../components/Modal/ReviewsModal";
import PhotosModal from "../../components/Modal/PhotosModal";
import styles from "./photos-and-reviews.module.scss";
import { ReviewTable } from "../ReviewTable";
import Photo from "./Photo";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";

import {
  retrieveParkImages,
  retrieveParkReviews,
} from "../../redux/ParkDetails/ParkDetails.thunks";

export default function PhotosAndReviews() {
  const { parkCode } = useParams();
  const park = useSelector((store) => store.parkDetails);
  const [value, setValue] = useState(0);

  const [photoModal, setPhotoModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [showReviewsAlert, setReviewsAlert] = useState(false);
  const [showPhotosAlert, setPhotosAlert] = useState(false);

  const [images, setImages] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setImages(park?.details.images.concat(park.userImages));
  }, [park.userImages, park.details]);

  useEffect(() => {
    if (park.details) {
      dispatch(retrieveParkReviews(parkCode));
      dispatch(retrieveParkImages(park.details["_id"]));
    }
  }, []);

  useEffect(() => {
    if (showReviewsAlert) {
      setTimeout(() => {
        setReviewsAlert(false);
      }, 4000);
    }
  }, [showReviewsAlert]);

  useEffect(() => {
    if (showPhotosAlert) {
      setTimeout(() => {
        setPhotosAlert(false);
      }, 4000);
    }
  }, [showPhotosAlert]);

  if (!park.details) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles.photosAndReviewsWrapper}>
      <Tabs
        value={value}
        style={{ display: "flex", justifyContent: "center" }}
        onChange={handleChange}
        aria-label="basic tabs example">
        <Tab label="Reviews" />
        <Tab label="Photos" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div className={styles.addReviewButton}>
          <Button variant="outlined" onClick={() => setReviewModal(true)}>
            Add review
          </Button>
        </div>
        {showReviewsAlert && (
          <Alert
            className={styles.submitAlert}
            severity="success"
            maxWidth={false}
            variant="filled"
            sx={{ mb: 2 }}>
            Review added successfully
          </Alert>
        )}
        <ReviewTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.addPhotoButton}>
          <Button variant="outlined" onClick={() => setPhotoModal(true)}>
            Add photo
          </Button>
        </div>
        {showPhotosAlert && (
          <Alert
            className={styles.submitAlert}
            severity="success"
            maxWidth={false}
            variant="filled"
            sx={{ mb: 2 }}>
            Photo added successfully
          </Alert>
        )}
        <div className={styles.parkImagesContainer}>
          {images.map((imgDetails, i) => {
            if (i === images.length - 1) {
              return (
                <Photo
                  key={i}
                  url={imgDetails?.url}
				  likes={imgDetails.favouritedCount}
                  className={styles.lastImg}
                />
              );
            } else {
              return <Photo key={i} url={imgDetails.url} />;
            }
          })}
        </div>
      </TabPanel>
      {reviewModal && (
        <ReviewsModal setVisible={setReviewModal} setAlert={setReviewsAlert} />
      )}
      {photoModal && (
        <PhotosModal setVisible={setPhotoModal} setAlert={setPhotosAlert} />
      )}
    </div>
  );
}
