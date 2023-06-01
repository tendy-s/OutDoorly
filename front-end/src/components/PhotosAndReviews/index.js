import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getParkDetails } from "../../services/park-service";
import { Button, Tab, Tabs } from "@mui/material";
import { TabPanel } from "../../components/ParkDetailsTabPanel";
import styles from "./photos-and-reviews.module.scss";

export default function PhotosAndReviews() {
  const { parkCode } = useParams();
  const [parkDetails, setParkDetails] = useState();
  const [value, setValue] = useState(0);

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

  if (!parkDetails) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles.photosAndReviewsWrapper}>
      {/* {JSON.stringify(parkDetails)} */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Reviews" />
        <Tab label="Photos" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Button variant="outlined">Add review</Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.addPhotoButton}>
          <Button variant="outlined">Add photo</Button>
        </div>
        <div className={styles.parkImagesContainer}>
          {parkDetails.images.map((imgDetails) => {
            return <img className={styles.parkImg} src={imgDetails.url} />;
          })}
        </div>
      </TabPanel>
    </div>
  );
}
