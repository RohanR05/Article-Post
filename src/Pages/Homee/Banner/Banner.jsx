import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";

const Banner = () => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-duration="2000"
      className="p-1 rounded-2xl overflow-hidden mx-auto" // max width
    >
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={1400}
        showThumbs={false}
        showStatus={false}
        emulateTouch
      >
        <div>
          <img
            src={img1}
            alt="Banner 1"
            className="rounded-2xl max-h-[500px]  object-cover"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Banner 2"
            className="rounded-2xl max-h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Banner 3"
            className="rounded-2xl max-h-[500px] object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
