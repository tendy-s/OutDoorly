import { useParams } from "react-router-dom";
import styles from "./park-details.module.scss";
import { useEffect, useState } from "react";
import { getParkDetails } from "../../services/park-service";
import { Tab, Tabs } from "@mui/material";
import { TabPanel } from "../../components/ParkDetailsTabPanel";
import PhotosAndReviews from "../../components/PhotosAndReviews";

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
			console.log();
		}
		fetchParkDetails();
	}, []);

	if (!parkDetails) {
		return <div> loading...</div>;
	}

	return (
		<div className={styles.parkDetailsWrapper}>
			<h2>{parkDetails.fullName}</h2>
			<img className={styles.mainImg} alt={"park"} src={parkDetails.images[0].url}/>
			{/* {JSON.stringify(parkDetails)} */}
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="basic tabs example">
				<Tab label="Description" />
				<Tab label="Operating Hours" />
				<Tab label="Weather Info" />
			</Tabs>
			<TabPanel value={value} index={0}>
				{parkDetails.description}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{parkDetails.operatingHours[0].description}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{parkDetails.weatherInfo}
			</TabPanel>
			<PhotosAndReviews />
		</div>
	);
}
