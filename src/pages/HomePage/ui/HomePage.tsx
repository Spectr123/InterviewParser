import Header from "@/widget/Header";
import Welcome from "@/widget/Welcome";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
    </div>
  );
}
