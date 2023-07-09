import { useDispatch, useSelector } from "react-redux";
import styles from "./search-results.module.scss";
import { useEffect } from "react";
import ResultsListing from "../../components/ResultsListing";
import { Button } from "@mui/material";
import { searchForParks } from "../../redux/ParkSearchInfo/ParkSearchInfo.thunks";
import {
  A_TO_Z_SORTING,
  INCREASING,
  toggleDistanceSort,
  toggleSort,
} from "../../redux/ParkSearchInfo/ParkSearchInfo.slice";

export default function SearchResults() {
  const searchResults = useSelector(
    (state) => state.parkSearchInfo.searchResults
  );
  const searchCity = useSelector((state) => state.parkSearchInfo.searchCity);
  const searchDistance = useSelector(
    (state) => state.parkSearchInfo.searchDistance
  );
  const sortDir = useSelector((state) => state.parkSearchInfo.sortDir);
  const distanceSortDir = useSelector(
    (state) => state.parkSearchInfo.distanceSortDir
  );
  const searchMode = useSelector((state) => state.parkSearchInfo.searchMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchForParks());
    console.log(searchCity, searchDistance);
  }, [sortDir, distanceSortDir]);

  if (searchResults && searchResults.length === 0) {
    return (
      <div className={styles.noResults}>
        <img
          src="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="pug"
        />
        <h2>Oops! No results. Please try again.</h2>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.sortButton}>
        {searchMode === "PREFERENCES" ? (
          <Button onClick={() => dispatch(toggleSort())}>
            {sortDir === A_TO_Z_SORTING ? "Sort A-Z" : "Sort Z-A"}
          </Button>
        ) : (
          <Button onClick={() => dispatch(toggleDistanceSort())}>
            {distanceSortDir === INCREASING
              ? "Sort by Increasing Distance"
              : "Sort by Decreasing Distance"}
          </Button>
        )}
      </div>
      <div className={styles.searchResultsWrapper}>
        <ResultsListing searchResults={searchResults} />
      </div>
    </div>
  );
}
