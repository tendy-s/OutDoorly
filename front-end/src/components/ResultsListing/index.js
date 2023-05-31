import ResultListItem from "../ResultListItem";

export default function ResultsListing({ searchResults }) {
  return (
    <div>
      {searchResults.map((a) => {
        return (
          <>
            <h4>{a.name}</h4>
            {a.parks.map((p) => {
              return <ResultListItem name={p.name} />;
            })}
          </>
        );
      })}
    </div>
  );
}
