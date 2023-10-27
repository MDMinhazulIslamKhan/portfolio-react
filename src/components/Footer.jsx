import {
  cv,
  cvPdf,
  facebook,
  github1,
  gmail,
  linkedin,
  logo,
  phone,
} from "../assets/index";
import { styles } from "../style";

const Footer = () => {
  return (
    <div className=" bg-black-100 pt-8">
      <div className="flex gap-1 items-center justify-center mb-5">
        <img src={logo} className="w-7" alt="" />
        <p className={`${styles.sectionSubText} text-center`}>
          Md. Minhazul Islam Khan
        </p>
        <img src={logo} className="w-7" alt="" />
      </div>
      <div className="flex sm:flex-row flex-col justify-around overflow-hidden">
        <div className="flex flex-col gap-2">
          <a
            href="mailto:minhazulislamkhan@gmail.com"
            className="flex gap-4 items-center text-xs"
          >
            <img src={gmail} className="w-8" alt="" />
            <p className="text-secondary">minhazulislamkhan@gmail.com</p>
          </a>
          <a
            href="tel:+8801521438469"
            className="flex gap-4 items-center text-xs"
          >
            <img src={phone} className="w-8" alt="" />
            <p className="text-secondary">Contact: +8801521438469</p>
          </a>
          <a
            href="https://github.com/MDMinhazulIslamKhan"
            className="flex gap-4 items-center text-xs"
            target="_blank"
          >
            <img src={github1} className="w-8" alt="" />
            <p className="text-secondary">github.com/mdminhazulislamkhan</p>
          </a>
        </div>
        <div className="flex flex-col justify-center mt-2 sm:mt-0 gap-2">
          <a
            href="https://www.facebook.com/mdminhazulislam.khan.77"
            className="flex gap-4 items-center text-xs"
            target="_blank"
          >
            <img src={facebook} className="w-7" alt="" />
            <p className="text-secondary">
              facebook.com/mdminhazulislam.khan.77
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/mdminhazulislamkhan"
            className="flex gap-4 items-center text-xs"
            target="_blank"
          >
            <img src={linkedin} className="w-7" alt="" />
            <p className="text-secondary">
              linkedin.com/in/mdminhazulislamkhan
            </p>
          </a>
          <a
            href={cvPdf}
            className="flex gap-4 items-center text-xs"
            target="_blank"
          >
            <img src={cv} className="w-7" alt="" />
            <p className="text-secondary"> Md. Minhazul Islam Khan</p>
          </a>
        </div>
      </div>
      <p className="text-center text-secondary text-xs mt-3 pb-5">
        © {new Date().getFullYear()} All Rights Reserved Minhaz.
      </p>
    </div>
  );
};

export default Footer;
