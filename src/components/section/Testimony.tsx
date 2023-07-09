import { styles } from "@/css/styles";
import Testimony1 from "@/assets/testimoni-1.png";
import Testimony2 from "@/assets/testimoni-2.png";
import Testimony3 from "@/assets/testimoni-3.png";
import Testimony4 from "@/assets/testimoni-4.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonialData = [
  {
    name: "Agus Anwar",
    jobTitle: "Manager",
    image: Testimony1,
    comment: `“Sangat membantu kami, Terimakasih...”`,
  },
  {
    name: "Iqbal Ramadhan",
    jobTitle: "Sales Marketing",
    image: Testimony2,
    comment: `“Sangat membantu kami, Terimakasih...”`,
  },
];
const responsive = {
  lgDeskop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1200, min: 800 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 769, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimony = () => {
  return (
    <section className="bg-white" id="testimonial">
      <div className={`${styles["main-container"]}`}>
        <div className="py-[80px]">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-purple-brand font-bold text-lg">TESTIMONIAL</h2>
            <h1 className="text-[20px] font-extrabold text-gray-brand">Hasil Testimoni Dari Client Kami</h1>
          </div>
          <Carousel responsive={responsive} infinite={true} className="py-10 items-center mt-[80px]">
            {testimonialData.map((item, key) => (
              <div className="border-2 border-gray-100 rounded-[10px] h-[300px] w-[240px] pt-10 relative m-auto p-6" key={key}>
                <div className="text-center mt-7">
                  <h1 className="text-[22px] font-bold text-gray-brand">{item.name}</h1>
                  <h3 className="text-[#BAB8D2] text-[15px] ">{item.jobTitle}</h3>
                  <p className="text-[14px] mt-[30px]">{item.comment}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
