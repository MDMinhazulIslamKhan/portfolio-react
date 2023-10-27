import { styles } from "../style";

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Minhaz</span>
          </h1>
          <h3 className="text-[#93afec] italic text-sm">
            Full Stack Developer
          </h3>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces <br className="sm:block hidden" />
            and web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
