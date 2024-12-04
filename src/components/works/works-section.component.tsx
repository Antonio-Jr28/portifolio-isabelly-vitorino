import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { NewsCard } from "./news-card-works.component";
import { news } from "../../data/newsData";
import { SwiperNavButton } from "./swiper-nav-button-style";

export const WorksSection = () => {
  return (
    <>
      <div className="w-auto h-auto p-6 bg-[#f2c879]">
        <h1 className="text-4xl text-center py-6">Trabalhos Recentes</h1>
        <Swiper
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {news.map((item, index) => (
            <SwiperSlide key={index}>
              <NewsCard
                label={item.label}
                imageSrc={item.imageSrc}
                title={item.title}
                content={item.content}
              />
            </SwiperSlide>
          ))}
          <SwiperNavButton />
        </Swiper>
      </div>
    </>
  );
};
