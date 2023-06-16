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

export default function PhotosAndReviews() {
  const { parkCode } = useParams();
  const [parkDetails, setParkDetails] = useState();
  const [value, setValue] = useState(0);

  const [photoModal, setPhotoModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [showReviewsAlert, setReviewsAlert] = useState(false);
  const [showPhotosAlert, setPhotosAlert] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchParkDetails() {
      const res = await getParkDetails(parkCode);
      setParkDetails(res.data.data[0]);
    }
    fetchParkDetails();
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

  if (!parkDetails) {
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
            Review added Successfully
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
            Photo added Successfully
          </Alert>
        )}
        <div className={styles.parkImagesContainer}>
          {parkDetails.images.map((imgDetails, i) => {
            if (i === parkDetails.images.length - 1) {
              return <Photo url={imgDetails.url} className={styles.lastImg} />;
            } else {
              return <Photo url={imgDetails.url} />;
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