import { Pagination } from "@mui/material";
import ResultListItem from "../ResultListItem";
import styles from "./results-listing.module.scss";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../../redux/ParkSearchInfo/ParkSearchInfo.slice";
import { searchForParks } from "../../redux/ParkSearchInfo/ParkSearchInfo.thunks";

export default function ResultsListing({ searchResults }) {
  console.log("SEARCH RESULTS ", searchResults);
  const dispatch = useDispatch();
  return (
    <div>
<<<<<<< HEAD
=======
      <h3 className={styles.resultsHeading}>
        {searchResults.count === 1 ? "Result" : "Results"} (
        {searchResults.count})
      </h3>
>>>>>>> 4e292bf (update pagination for preference search results)
      {searchResults.data.map((p) => {
        return (
          <ResultListItem
            key={p.parkCode}
            fullName={p.fullName}
            parkID={p._id}
            distance={p.distance}
            description={p.description}
            images={p.images}
          />
        );
      })}
      <div className={styles.pagination}>
        <Pagination
          count={searchResults.totalPages}
          page={searchResults.currentPage}
          onChange={(_, page) => {
            dispatch(setPageNumber(page));
            dispatch(searchForParks());
          }}
          color="primary"
        />
      </div>
    </div>
  );
}
