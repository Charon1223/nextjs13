import Image from "next/image";
import styles from "./page.module.css";
import "./style.css";

export default function Home() {
  return (
    <div className={styles.main} id="home-text">
      홈화면
    </div>
  );
}
