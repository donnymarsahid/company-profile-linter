import { styles } from "@/css/styles";
import React from "react";
import Konsul1 from "@/assets/konsul.png";

const Service = () => {
  return (
    <section className="bg-[#F8F8FF]">
      <div className={`${styles["main-container"]}`}>
        <div className="py-[80px]">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
              <h2 className="text-xl font-bold text-purple-brand leading-[27px] text-xl">Services</h2>
              <h1 className="font-bold md:text-[24px] text-2xl leading-[60px]">Layanan IT Konsultan</h1>
            </div>
            <div></div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[55px] gap-y-5 mt-[60px]">
            {[1, 1, 1].map((_, key) => (
              <div
                className="p-[30px] bg-white rounded-[12px] hover:bg-purple-brand hover:scale-105 transition-all hover:origin-top hover:text-white shadow-md text-gray-brand-2 delay-100"
                key={key}
              >
                <img src={Konsul1} width={150} alt={`Service ${key}`} />
                <div className="mt-[30px] ">
                  <h2 className="font-bold text-xl">Konsultasi IT</h2>
                  <p className="font-normal text-sm text-justify">
                    Kami menawarkan konsultasi IT yang komprehensif untuk membantu Anda merancang dan mengimplementasikan strategi IT yang sesuai dengan kebutuhan bisnis Anda.
                  </p>
                </div>
                <button className="mt-[30px]   font-semibold  from-green-500 bg-purple-brand w-full rounded-md py-1 text-white">Lihat Selengkapnya</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
