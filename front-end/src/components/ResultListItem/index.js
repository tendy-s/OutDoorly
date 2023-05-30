import { useNavigate } from "react-router-dom";
import styles from "./result-list-item.module.scss";
import { getRoutes } from "../../routes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ResultListItem({ name }) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <div
          className={styles.listItemWrapper}
          onClick={() => navigate(getRoutes().parkDetails)}
        >
          {name}
        </div>
      </CardContent>
    </Card>
  );
}
