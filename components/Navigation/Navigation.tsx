import Link from "next/link";
import { navData } from "./navData";
import styles from "./Navigation.module.css";
import Image from "next/image";

export const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Image src="/logo.svg" width={220} height={20} alt="logo" />
      </div>
      <nav className={styles.navbar__nav}>
        {navData.map((item, index) => (
          <Link href={item.href} key={index}>
            {item.label}
          </Link>
        ))}
        <div>
          <button className={styles.navbar__btn}>Get template</button>
        </div>
      </nav>
    </div>
  );
};
