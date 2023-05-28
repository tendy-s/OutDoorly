import ResultListItem from "../../components/ResultListItem";
import styles from "./search-results.module.scss";

export default function SearchResults() {
  return (
    <div className={styles.searchResultsWrapper}>
      <ResultListItem />
    </div>
  );
}
