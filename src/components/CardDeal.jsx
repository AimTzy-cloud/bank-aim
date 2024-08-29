import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        kartu yang lebih baik <br className="sm:block hidden" /> dalam beberapa hal yang mudah.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ayo Temukan kartu menarik anda, Ada banyak pilihan kartu yang anda inginkan, Tetap bersama bank AimLippo karna disinilah anda bisa menabung atau ber-investasi juga.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
