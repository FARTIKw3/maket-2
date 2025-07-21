import Link from "next/link";
import style from "./OurTeam.module.css";
import Image from "next/image";
import { OurTeamData } from "./OurTeamData";

export const OurTeam = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2>Meet our team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis.
        </p>
        <div>
          <Link href="/">See team</Link>
        </div>
      </div>
      <div className={style.team}>
        {OurTeamData.map((item, index) => (
          <div key={index} className={style.about__partner}>
            <div className={style.about__partner__avatar}>
              <Image src={item.avatar} width={85} height={85} alt="partner" />
            </div>
            <div className={style.about__partner__info}>
              <div>
                <span className={style.about__partner__name}>{item.name}</span>
              </div>
              <div>
                <span className={style.about__partner__position}>
                  {item.position}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
