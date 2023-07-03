import { useParams } from "react-router-dom";
import styles from "./park-details.module.scss";
import { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { TabPanel } from "../../components/ParkDetailsTabPanel";
import PhotosAndReviews from "../../components/PhotosAndReviews";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedParkID } from "../../redux/ParkSearchInfo/ParkSearchInfo.slice";
import { retrieveParkDetails } from "../../redux/ParkSearchInfo/ParkSearchInfo.thunks";
import ParkMap from "../../components/Map/index.js";

export default function ParkDetails() {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const parkDetails = useSelector((store) => store.parkDetails.details);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log("SETTING ID ", id);
    dispatch(setSelectedParkID(id));
    dispatch(retrieveParkDetails());
  }, []);

  useEffect(() => {
    console.log(parkDetails);
  });
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
            sx={{ borderRight: 1, borderColor: "grey.500", mb: 2, pt: 4 }}
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
        <Box sx={{ borderBottom: 1, borderColor: "grey.500", pb: 2 }}>
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
