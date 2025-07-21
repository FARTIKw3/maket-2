import Link from "next/link";
import style from "./Touch.module.css";

export const Touch = () => {
  return (
    <div className={style.content}>
      <div className={style.text}>
        <span>GET IN TOUCH</span>
        <h1>Think we would be a good fit for your next project?</h1>
      </div>
      <div className={style.btn}>
        <Link href="/">Get in touch</Link>
      </div>
    </div>
  );
};
