import { useSelector } from "react-redux";
import styles from "./search-results.module.scss";
import { useEffect, useState } from "react";
import { getParksByActivity } from "../../services/park-service";
import ResultsListing from "../../components/ResultsListing";
import { Button } from "@mui/material";

export default function SearchResults() {
  const searchParams = useSelector((state) => state.parkSearchInfo);
  const [parksInfo, setParksInfo] = useState([]);
  useEffect(() => {
    async function searchForParks() {
      const res = await getParksByActivity(searchParams.searchActivities);
      console.log(res);
      setParksInfo(res.data.data);
    }
    searchForParks();
  }, []);

  console.log(searchParams, parksInfo);
  return (
    <div>
      <div className={styles.sortButton}>
        <Button>Sort by Ratings</Button>
      </div>
      <div className={styles.searchResultsWrapper}>
        <ResultsListing searchResults={parksInfo} />
      </div>
    </div>
  );
}
