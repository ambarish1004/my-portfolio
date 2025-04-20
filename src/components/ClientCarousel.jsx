import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "../styles/clientCarousel.css";

// You can swap in your own logos below
const clientLogos = [
  "/assets/clients/google.png",
  "/assets/clients/netflix.png",
  "/assets/clients/apple.png",
  "/assets/clients/behance.png",
  "/assets/clients/dribbble.png",
  "/assets/clients/github.png",
];

const ClientCarousel = () => {
  return (
    <section className="client-carousel">
      <h2 className="carousel-title">🌐 Clients & Collaborations</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Autoplay, Pagination]}
        className="client-swiper"
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="client logo" className="client-logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientCarousel;
