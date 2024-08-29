import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import cardim from "../assets/cardim.png"

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Ini Banknya <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Anak Muda</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Aim Lippo.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Tim ahli kami menggunakan metodologi untuk mengidentifikasi kartu kredit
          kemungkinan besar sesuai dengan kebutuhan Anda. Kami memeriksa tingkat persentase tahunan,
          biaya tahunan.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={cardim} alt="billing" className="w-[80%] h-auto relative z-[5]"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
