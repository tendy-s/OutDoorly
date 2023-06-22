import styles from "./photos.module.scss";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const photoStyle = {
  hovered: {
    filter: "brightness(0.5)",
  },
  notHovered: {
    filter: "brightness(1)",
  },
};

const likes = 99;

export default function Photo(props) {
  const [hovered, setHovered] = useState(false);
  const [favourited, setFavourited] = useState(false);

  useEffect(() => {}, [favourited]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setFavourited(!favourited)}
      className={styles.photoContainer + " " + styles.notFavourited}>
      <img
        alt={"Park"}
        src={props.url}
        className={styles.photoImage}
        style={hovered ? photoStyle.hovered : photoStyle.notHovered}
      />
      {hovered && favourited && (
        <FavoriteIcon className={styles.photoFavorite} />
      )}
      {hovered && !favourited && (
        <FavoriteBorderIcon className={styles.photoFavorite} />
      )}
      {!hovered && (
        <div className={styles.favourites}>
          <FavoriteIcon />
          <div>{likes}</div>
        </div>
      )}
    </div>
  );
}
