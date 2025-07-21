import Image from "next/image";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <div>
          {" "}
          <Image src="/logo.svg" width={220} height={20} alt="logo" />
        </div>
        <div className={style.footer__text}>
          <p>Powered by Webflow</p>

          <p>All rights reserved Wishbone+Partners, Inc. Licensing</p>
        </div>
      </div>
      <div className={style.footer__social}>
        <div>
          {" "}
          <Image src="/tw.svg" width={25} height={25} alt="logo" />
        </div>
        <div>
          {" "}
          <Image src="/inst.svg" width={25} height={25} alt="logo" />
        </div>
        <div>
          {" "}
          <Image src="/face.svg" width={25} height={25} alt="logo" />
        </div>
      </div>
    </div>
  );
};
