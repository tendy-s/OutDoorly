import { useParams } from "react-router-dom";
import styles from "./park-details.module.scss";
import { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography, Rating } from "@mui/material";
import { TabPanel } from "../../components/ParkDetailsTabPanel";
import PhotosAndReviews from "../../components/PhotosAndReviews";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedParkID } from "../../redux/ParkSearchInfo/ParkSearchInfo.slice";
import { retrieveParkDetails } from "../../redux/ParkDetails/ParkDetails.thunks";
import ParkMap from "../../components/Map/index.js";
import { ClimbingBoxLoader } from "react-spinners";
export default function ParkDetails() {
	const { id } = useParams();
	const [value, setValue] = useState(0);
	const dispatch = useDispatch();
	const details = useSelector((store) => store.parkDetails);
	const parkDetails = details?.details;
	const loading = useSelector((state) => state.parkDetails.loading);
	const [rating, setRating] = useState(0);

	useEffect(() => {
		setRating(
			(
				parkDetails?.userReviews?.reduce((acc, curr) => {
					return acc + parseInt(curr.experienceRating);
				}, 0) / parkDetails?.userReviews.length
			).toPrecision(2)
		);
	}, [details]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		dispatch(setSelectedParkID(id));
		dispatch(retrieveParkDetails());
	}, []);

	return (
		<div>
			{loading || !parkDetails ? (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}>
					<ClimbingBoxLoader size={60} color="#667761" />
				</div>
			) : (
				<div className={styles.parkDetailsWrapper}>
					<Typography variant="h3" sx={{ textAlign: "center", m: 3 }}>
						{parkDetails?.fullName}
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
						<Tab label="More Info" />
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
							<Typography>
								{parkDetails.operatingHours[0].description}
							</Typography>
						</Box>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Box sx={{ borderBottom: 1, borderColor: "grey.500", pb: 3 }}>
							<Typography>{parkDetails.weatherInfo}</Typography>
						</Box>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<Box sx={{ borderBottom: 1, borderColor: "grey.500", pb: 3 }}>
							<Typography>



				</Typography>
						</Box>
					</TabPanel>
					<div
						style={{
							marginTop: 5,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Typography sx={{ pr: 1 }} variant="h6">
							Average Rating:
						</Typography>
						<Rating value={rating} readOnly />
					</div>
					<PhotosAndReviews />
				</div>
			)}
		</div>
	);
}
