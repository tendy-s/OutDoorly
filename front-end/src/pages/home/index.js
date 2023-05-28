import styles from "./home.module.scss";
import PreferencesForm from "../../components/PreferencesForm";

export default function Home() {
  return (
    <div className={styles.home}>
      <img
        src="https://images.unsplash.com/photo-1565030784130-0e0ef4b06b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        alt="yellowstone"
      />
      <div className="my-home-div"></div>
      <PreferencesForm />
    </div>
  );
}
