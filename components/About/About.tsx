import Image from "next/image";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.about__content}>
      <div>
        <h2 className={styles.about__title}>Our firm</h2>
      </div>
      <div>
        <div>
          <p className={styles.about__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <p className={styles.about__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <p className={styles.about__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className={styles.about__partner}>
          <div className={styles.about__partner__avatar}>
            <Image
              src="/partnerAvatar.jpg"
              width={85}
              height={85}
              alt="partner"
            />
          </div>
          <div className={styles.about__partner__info}>
            <div>
              <span className={styles.about__partner__name}>
                Stephen Collier
              </span>
            </div>
            <div>
              <span className={styles.about__partner__position}>
                Senior Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
