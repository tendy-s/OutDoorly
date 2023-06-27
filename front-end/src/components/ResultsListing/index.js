import ResultListItem from "../ResultListItem";
import styles from "./results-listing.module.scss";

export default function ResultsListing({ searchResults }) {
  return (
    <div>
      {searchResults.map((p) => {
        return (
          <ResultListItem
            key={p.parkCode}
            name={p.name}
            parkCode={p.parkCode}
          />
        );
      })}
    </div>
  );
}
