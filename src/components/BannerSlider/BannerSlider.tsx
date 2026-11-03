import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import styles from './BannerSlider.module.scss';

type Banner = {
  id: string;
  image: string;
  mobileImage: string;
  alt: string;
  to: string;
};

const banners: Banner[] = [
  {
    id: 'iphone18pro',
    image: 'img/banners/banner-iphone-18-pro.webp',
    mobileImage: 'img/banners/banner-iphone-18-pro-square.webp',
    alt: 'iPhone 18 Pro',
    to: '/phones/apple-iphone-18-pro-256gb-burgundy',
  },
  {
    id: 'phones',
    image: 'img/banners/banner-phones.webp',
    mobileImage: 'img/banners/banner-phones-square.webp',
    alt: 'Phones',
    to: '/phones',
  },
  {
    id: 'tablets',
    image: 'img/banners/banner-tablets.webp',
    mobileImage: 'img/banners/banner-tablets-square.webp',
    alt: 'Tablets',
    to: '/tablets',
  },
  {
    id: 'accessories',
    image: 'img/banners/banner-accessories.webp',
    mobileImage: 'img/banners/banner-accessories-square.webp',
    alt: 'Accessories',
    to: '/accessories',
  },
];

export const BannerSlider: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.main}>
        <button
          onClick={e => {
            e.stopPropagation();
          }}
          type="button"
          className={`${styles.arrow} ${styles.prev}`}
          aria-label="Previous banner"
        >
          <img src="img/ArrowLeft-active.svg" alt="" />
        </button>

        <Swiper
          className={styles.swiper}
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop
          speed={700}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: `.${styles.prev}`,
            nextEl: `.${styles.next}`,
          }}
          pagination={{
            el: `.${styles.dashes}`,
            clickable: true,
            bulletClass: styles.dash,
            bulletActiveClass: styles.dashActive,
          }}
        >
          {banners.map(banner => (
            <SwiperSlide key={banner.id}>
              <NavLink to={banner.to} className={styles.link}>
                <picture>
                  <source
                    media="(max-width: 639px)"
                    srcSet={banner.mobileImage}
                  />
                  <img
                    className={styles.image}
                    src={banner.image}
                    alt={banner.alt}
                    loading={banner.id === banners[0].id ? 'eager' : 'lazy'}
                  />
                </picture>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={e => {
            e.stopPropagation();
          }}
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          aria-label="Next banner"
        >
          <img src="img/ArrowRight-active.svg" alt="" />
        </button>
      </div>

      <div className={styles.dashes} />
    </section>
  );
};

export default BannerSlider;
