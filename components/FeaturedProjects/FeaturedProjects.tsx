import Link from "next/link";
import style from "./FeaturedProjects.module.css";

export const FeaturedProjects = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>Featured projects</h2>
        <p>
          Some of the latest and greatest projects from us here at
          Wishbone+Partners.
        </p>
      </div>
      <div className={style.project}>
        <div className={style.project__bg1}>
          <div className={style.project__text}>
            <span>New Yok</span>
            <h2>Big Road Brewery</h2>
          </div>
          <div className={style.project__button}>
            <button>Read more</button>
          </div>
        </div>{" "}
        <div className={style.project__bg2}>
          <div className={style.project__text}>
            <span>New Yok</span>
            <h2>Big Road Brewery</h2>
          </div>
          <div className={style.project__button}>
            <button>Read more</button>
          </div>
        </div>{" "}
        <div className={style.project__bg3}>
          <div className={style.project__text}>
            <span>New Yok</span>
            <h2>Big Road Brewery</h2>
          </div>
          <div className={style.project__button}>
            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className={style.viewAll}>
        <Link href="/">View all projects</Link>
      </div>
    </div>
  );
};
