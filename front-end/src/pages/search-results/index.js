import { useDispatch, useSelector } from "react-redux";
import styles from "./search-results.module.scss";
import { useEffect } from "react";
import ResultsListing from "../../components/ResultsListing";
import { Button } from "@mui/material";
import { searchForParks } from "../../redux/ParkSearchInfo/ParkSearchInfo.thunks";
import {
  A_TO_Z_SORTING,
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchForParks());
    console.log(searchCity, searchDistance);
  }, [sortDir]) 

  return (
    <div>
      <div className={styles.sortButton}>
        <Button onClick={() => dispatch(toggleSort())}>
          {sortDir === A_TO_Z_SORTING ? "Sort A-Z" : "Sort Z-A"}
        </Button>
      </div>
      <div className={styles.searchResultsWrapper}>
        <ResultsListing searchResults={searchResults} />
      </div>
    </div>
  );
}
