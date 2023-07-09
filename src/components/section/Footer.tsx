import { styles } from "@/css/styles";
import Logo from "@/assets/logo.png";
import Mail from "@/assets/mail.svg";
import Telephone from "@/assets/telphone.svg";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className={`${styles["main-container"]}`}>
        <div className="py-[80px] grid md:grid-cols-footer grid-cols-1">
          <div className="flex flex-col items-start justify-between">
            <img src={Logo} alt="Logo" className="h-12" />
            <span className="hidden sm:block font-normal text-md">&#169; Copyright © 2023 Developkan.id | Allrights reserverd</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
