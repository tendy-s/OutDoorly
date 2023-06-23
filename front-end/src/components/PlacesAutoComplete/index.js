import { useRef, useEffect } from "react";
import styles from "./places-autocomplete.module.scss";

// Source: https://www.telerik.com/blogs/integrating-google-places-autocomplete-api-react-app

const PlacesAutoComplete = ({ onChange }) => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "icon", "name"],
    types: ["(cities)"],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      console.log({ place });
      onChange(place);
    });
  }, []);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};
export default PlacesAutoComplete;
