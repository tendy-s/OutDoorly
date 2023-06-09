import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getParkDetails } from "../../services/park-service";
import { Button, Tab, Tabs } from "@mui/material";
import { TabPanel } from "../../components/ParkDetailsTabPanel";
import ReviewsModal from "../../components/Modal/ReviewsModal";
import PhotosModal from "../../components/Modal/PhotosModal";
import styles from "./photos-and-reviews.module.scss";
import { ReviewTable } from "../ReviewTable";

export default function PhotosAndReviews() {
	const { parkCode } = useParams();
	const [parkDetails, setParkDetails] = useState();
	const [value, setValue] = useState(0);

	const [photoModal, setPhotoModal] = useState(false);
	const [reviewModal, setReviewModal] = useState(false);

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
				<ReviewTable />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<div className={styles.addPhotoButton}>
					<Button variant="outlined" onClick={() => setPhotoModal(true)}>
						Add photo
					</Button>
				</div>
				<div className={styles.parkImagesContainer}>
					{parkDetails.images.map((imgDetails, i) => {
						if (i === parkDetails.images.length - 1) {
							return (
								<img
									className={(styles.lastImg)}
									src={imgDetails.url}
								/>
							);
						} else {
							return <img className={styles.parkImg} src={imgDetails.url} />;
						}
					})}
				</div>
			</TabPanel>
			{reviewModal && <ReviewsModal setVisible={setReviewModal} />}
			{photoModal && <PhotosModal setVisible={setPhotoModal} />}
		</div>
	);
}
