import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Navigation, EffectFade } from "swiper";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";
import styles from "./ImageSlider.module.scss";
import { imageSliderPhotos } from "../../utils/constants";

import brownCabinets from "../../images/imageSlider/brownCabinets.jpg";
import modernBrownCabinets from "../../images/imageSlider/modernBrownCabinets.jpg";
import whiteCabinets from "../../images/imageSlider/whiteCabinets.jpg";
import oldWhiteCabinets from "../../images/imageSlider/oldWhiteCabinets.jpg";

function ImageSlider() {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, EffectFade]}
        // navigation
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        // effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
        className={styles.myswiper}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {imageSliderPhotos.map((photo) => {
          return (
            <SwiperSlide className={styles.swiperslide} key={photo.id}>
              <img src={photo.src} alt={photo.alt} />
            </SwiperSlide>
          );
        })}
        <div className={`${styles.swiperNavPrev}`} ref={swiperNavPrevRef}></div>
        <div className={`${styles.swiperNavNext}`} ref={swiperNavNextRef}></div>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
