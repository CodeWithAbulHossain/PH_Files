import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="Slide1 w-full h-[550px] rounded-lg">
            <div className="mt-44 w-80 mx-auto">
              {" "}
              <h2 className="text-white text-3xl font-bold border-t-4 border-l-8 border-r-8">
                Apartments For Rent
              </h2>
            </div>
            <div className="w-[50%] mx-auto mt-8">
              <h2 className="font-medium text-white text-4xl">
                123 Elm Street, Springfield, USA
              </h2>
            </div>
            <div className="W-96 mx-auto mt-16">
              <h2 className="text-white text-2xl font-bold">
                Monthly Rent $1200
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide2 w-full h-[550px] rounded-lg">
            <div className="mt-44 w-80 mx-auto">
              {" "}
              <h2 className="text-black text-3xl font-bold border-t-4 border-l-8 border-r-8">
                Apartments For Sale
              </h2>
            </div>
            <div className="w-[50%] mx-auto mt-8">
              <h2 className="font-medium text-black text-4xl">
                123 Elm Street, Springfield, USA
              </h2>
            </div>
            <div className="W-96 mx-auto mt-16">
              <h2 className="text-black text-2xl font-bold">Sale $1,33200</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide3 w-full h-[550px] rounded-lg">
            <div className="mt-44 w-80 mx-auto">
              {" "}
              <h2 className="text-yellow-200 text-3xl font-bold border-t-4 border-l-8 border-r-8">
                House For Sale
              </h2>
            </div>
            <div className="w-[50%] mx-auto mt-8">
              <h2 className="font-medium text-sky-500 text-4xl">
                456 Oak Avenue, Pleasantville, USA
              </h2>
            </div>
            <div className="W-96 mx-auto mt-16">
              <h2 className="text-yellow-200 text-2xl font-bold">
                Sale $1,33200
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide4 w-full h-[550px] rounded-lg">
            {" "}
            <div className="mt-44 w-80 mx-auto">
              {" "}
              <h2 className="text-red-500 text-3xl font-bold border-t-4 border-l-8 border-r-8">
                House For Rent
              </h2>
            </div>
            <div className="w-[50%] mx-auto mt-8">
              <h2 className="font-medium text-red-500 text-4xl">
                789 Maple Lane, Lakeside, USA
              </h2>
            </div>
            <div className="W-96 mx-auto mt-16">
              <h2 className="text-red-500 text-2xl font-bold">
                Monthly Rent $2400
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide5 w-full h-[550px] rounded-lg">
            <div className="mt-16 w-80 mx-auto">
              {" "}
              <h2 className="text-black text-3xl font-bold border-t-4 border-l-8 border-r-8">
                House For Rent
              </h2>
            </div>
            <div className="w-[50%] mx-auto mt-8">
              <h2 className="font-medium text-black text-4xl">
                101 Pine Road, Mountain View, USA
              </h2>
            </div>
            <div className="W-96 mx-auto mt-16">
              <h2 className="text-red-500 text-2xl font-bold">
                Monthly Rent $1100
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide6 w-full h-[550px] rounded-lg">
            <div className="mt-56 w-80 mx-auto">
              {" "}
              <h2 className="text-yellow-200 text-3xl font-bold border-t-4 border-l-8 border-r-8">
                House For Sale
              </h2>
            </div>
            <div className="w-[50%] mx-auto mt-8">
              <h2 className="font-medium text-red-500 text-4xl">
                222 Cedar Drive, Riverside, USA
              </h2>
            </div>
            <div className="W-96 mx-auto mt-16">
              <h2 className="text-red-500 text-2xl font-bold">Sale $1100</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide7 w-full h-[550px] rounded-lg"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide8 w-full h-[550px] rounded-lg"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
