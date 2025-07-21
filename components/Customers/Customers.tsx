import Image from "next/image";
import style from "./Customers.module.css";

export const Customers = () => {
  return (
    <div className={style.customer}>
      <div className={style.customer__header}>
        <span className={style.customer__span}>PRIOR CLIENTS</span>
        <h2 className={style.customer__title}>Happy customers.</h2>
        <p className={style.customer__description}>
          Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
          Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
          ut faucibus orci tincidunt.
        </p>
      </div>
      <div className={style.customer__svg}>
        <div>
          <Image src="/customerSvg1.svg" width={128} height={30} alt="sr1" />
        </div>{" "}
        <div>
          <Image src="/customerSvg2.svg" width={128} height={78} alt="ser2" />
        </div>{" "}
        <div>
          <Image src="/customerSvg3.svg" width={128} height={20} alt="ser3" />
        </div>{" "}
        <div>
          <Image src="/customerSvg4.svg" width={128} height={36} alt="ser4" />
        </div>
      </div>
    </div>
  );
};
