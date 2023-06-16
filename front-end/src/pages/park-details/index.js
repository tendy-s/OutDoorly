import { useParams } from "react-router-dom";
import styles from "./park-details.module.scss";
import { useEffect, useState } from "react";
import { getParkDetails } from "../../services/park-service";
import { Tab, Tabs, Typography, Box } from "@mui/material";
import { TabPanel } from "../../components/ParkDetailsTabPanel";
import PhotosAndReviews from "../../components/PhotosAndReviews";
import ParkMap from "../../components/Map/index.js";

export default function ParkDetails() {
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
      console.log(parkDetails);
    }
    fetchParkDetails();
  }, []);

  if (!parkDetails) {
    return <div> loading...</div>;
  }

  return (
    <div className={styles.parkDetailsWrapper}>
      <Typography variant="h3" sx={{ m: 2 }}>
        {parkDetails.fullName}
      </Typography>

      <img
        className={styles.mainImg}
        alt={"park"}
        src={parkDetails.images[0].url}
      />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example">
        <Tab label="Description" />
        <Tab label="Operating Hours" />
        <Tab label="Weather Info" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box
          className={styles.descriptionContainer}
          sx={{ borderBottom: 1, borderColor: "grey.500" }}>
          <Box
            sx={{ borderRight: 1, borderColor: "grey.500", mb: 2 }}
            className={styles.description}>
            <Typography>{parkDetails.description}</Typography>
          </Box>
          <ParkMap
            lon={parkDetails.longitude}
            lat={parkDetails.latitude}
            name={parkDetails.fullName}></ParkMap>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ borderBottom: 1, borderColor: "grey.500", pb: 2}}>
          <Typography>{parkDetails.operatingHours[0].description}</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ borderBottom: 1, borderColor: "grey.500", pb: 3 }}>
          <Typography>{parkDetails.weatherInfo}</Typography>
        </Box>
      </TabPanel>
      <PhotosAndReviews />
    </div>
  );
}