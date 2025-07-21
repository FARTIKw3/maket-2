import style from "./Interior.module.css";

interface InteriorProps {
  bgImage: string;
  flex: string;
  title: string;
}

export const Interior = ({ bgImage, flex, title }: InteriorProps) => {
  return (
    <div
      className={style.interior}
      style={{ backgroundImage: `url(${bgImage})`, justifyContent: flex }}
    >
      <div className={style.interior__text}>
        <h2 className={style.interior__title}>{title}</h2>
        <p className={style.interior__paragraph}>
          Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.
        </p>
      </div>
    </div>
  );
};
