import { AppBar } from "@mui/material";
import styles from "./navigation-bar.module.scss";
import HikingIcon from "@mui/icons-material/Hiking";
import { useNavigate } from "react-router-dom";
import { getRoutes } from "../../routes";
import { cyan } from "@mui/material/colors"

export function NavigationBar() {
	const navigate = useNavigate();
	return (
		<div className={styles.navBar}>
			<AppBar position="static">
				<h1
					className={styles.pageName}
					onClick={() => {
						navigate(getRoutes().home);
					}}>
					<HikingIcon className={styles.navIcon} />
					OutDoorly
				</h1>
			</AppBar>
		</div>
	);
}
