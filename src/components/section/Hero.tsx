import { styles } from "@/css/styles";
import HeroImage from "@/assets/Hero.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className={`${styles["main-container"]}`}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5  lg:h-[calc(100vh_-_100px)]">
          <div className="order-2 lg:order-1 py-5 pt-24">
            <div>
              <h2 className="text-purple-brand text-xl font-bold uppercase">Selamat Datang Di Linter Teknologi</h2>
              <h1 className="md:text-[24px] text-2xl font-extrabold  text-gray-brand mt-1">Layanan Konsultan IT Terpercaya!</h1>
              <p className="mt-[15px]  text-gray-brand-2 md:text-sm font-medium">
                Kami adalah mitra yang andal untuk solusi IT di berbagai industri. Dengan tim ahli kami, kami menyediakan layanan konsultan IT yang inovatif dan solusi teknologi
                yang tepat guna untuk memenuhi kebutuhan bisnis Anda. Dengan pengalaman yang luas dan pengetahuan mendalam, kami siap membantu Anda mengoptimalkan potensi teknologi
                dalam bisnis Anda.
              </p>
              <button className="mt-8 sm:text-[18px] text-[#FFFFFF] sm:w-[250px] w-[80px] py-2 sm:py-2 bg-purple-brand rounded-xl hover:scale-105 transition-all hover:text-slate-600">
                Mulai
              </button>
            </div>
          </div>
          <div className="flex justify-center order-1 items-center">
            <img src={HeroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
