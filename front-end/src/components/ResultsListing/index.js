import ResultListItem from "../ResultListItem";
import styles from "./results-listing.module.scss";

export default function ResultsListing({ searchResults }) {
  return (
    <div>
      {searchResults.map((a) => {
        return (
          <>
            <h3 className={styles.filterTitle}>{a.name}</h3>
            {a.parks.map((p) => {
              return <ResultListItem name={p.name} parkCode={p.parkCode} />;
            })}
          </>
        );
      })}
    </div>
  );
}
