import ResultListItem from "../ResultListItem";
import styles from "./results-listing.module.scss";

export default function ResultsListing({ searchResults }) {
  return (
    <div>
      {searchResults.map((a) => {
        return (
          <div key={a.name}>
            <h3 className={styles.filterTitle}>{a.name}</h3>
            {a.parks.map((p) => {
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
      })}
    </div>
  );
}
