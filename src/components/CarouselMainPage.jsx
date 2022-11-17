import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function CarouselMainPage(){
    return (
        <div className="w-[80rem] mx-auto py-5 align-bottom bottom">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="w-[80rem] mx-auto"
                        src="https://www.static-src.com/siva/asset//11_2022/desktop-11nov-vans-car10.jpg?w=1056"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[80rem] mx-auto"
                        src="https://www.static-src.com/siva/asset//11_2022/desktop-11nov-aggregator-car5.jpg?w=1056"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[80rem] mx-auto"
                        src="https://www.static-src.com/siva/asset//11_2022/desktop-11nov-aggregator-car5.jpg?w=1056"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}