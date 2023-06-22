import { useDispatch, useSelector } from "react-redux";
import styles from "./search-results.module.scss";
import { useEffect } from "react";
import ResultsListing from "../../components/ResultsListing";
import { Button } from "@mui/material";
import { searchForParks } from "../../redux/ParkSearchInfo/ParkSearchInfo.thunks";

export default function SearchResults() {
  const searchResults = useSelector(
    (state) => state.parkSearchInfo.searchResults
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchForParks());
  }, []);

  return (
    <div>
      <div className={styles.sortButton}>
        <Button>Sort by Ratings</Button>
      </div>
      <div className={styles.searchResultsWrapper}>
        <ResultsListing searchResults={searchResults} />
      </div>
    </div>
  );
}
