import ResultListItem from "../ResultListItem";
import styles from "./results-listing.module.scss";

export default function ResultsListing({ searchResults }) {
  console.log("SEARCH RESULTS ", searchResults);
  return (
    <div>
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
    </div>
  );
}
