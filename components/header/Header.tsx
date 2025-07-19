import Link from "next/link";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <Navigation />
      <header className={styles.header}>
        <div className={styles.header__content}>
          <span className={styles.header__logo}>Wishbone+Partners</span>
          <div className={styles.header__title}>
            <h1>The home of beautiful architecture.</h1>
          </div>
          <div>
            <p className={styles.header__paragraph}>
              We are an architecture firm with a focus on beautiful but
              functional design. At its heart, we believe design is about
              usability and accessibility — these are the guiding principles for
              our work. Read more about our previous projects, our process and
              our team below.
            </p>
          </div>
          <Link href="/" className={styles.header__link}>
            Read more
          </Link>
        </div>
        <div className={styles.header__image}></div>
      </header>
    </div>
  );
};
