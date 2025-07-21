import Image from "next/image";
import style from "./Services.module.css";
import { servicesData } from "./servicesData";

export const Services = () => {
  return (
    <div className={style.services}>
      <div className={style.services__process}>
        <span>OUR PROCESS</span>
      </div>
      <div className={style.services__title}>
        <h1>How we do what we do.</h1>
      </div>
      <div className={style.services__content}>
        <div className={style.services__cards}>
          {servicesData.map((item, index) => (
            <div key={index} className={style.services__card}>
              <div>
                <Image src={item.svg} width={117} height={102} alt="service" />
              </div>
              <div className={style.services__name}>
                <h2>{item.title}</h2>
              </div>
              <div className={style.services__description}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
