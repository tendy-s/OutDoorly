import { useNavigate } from "react-router-dom";
import styles from "./result-list-item.module.scss";
import { getRoutes } from "../../routes";

export default function ResultListItem() {
  const navigate = useNavigate();
  return (
    <div
      className={styles.listItemWrapper}
      onClick={() => navigate(getRoutes().parkDetails)}
    >
      List me
    </div>
  );
}
