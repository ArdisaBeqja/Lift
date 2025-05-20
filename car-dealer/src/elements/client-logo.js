import React from 'react';

// Libraries
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import ClientLogo from '../component/client-logo';

// Site Data
import ClientLogoList, { ClientLogoList2 } from '../data/client-logo-list';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ElementsClientLogo() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Client Logo"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Client Logo', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper section-pb">
          <section className="section-ptb">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      400: {
                        slidesPerView: 2,
                      },
                      570: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      992: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    {ClientLogoList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            theme="logo-default"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb bg-light">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      400: {
                        slidesPerView: 2,
                      },
                      570: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      992: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    {ClientLogoList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            className="cl-size-md"
                            theme="logo-grayscale"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      400: {
                        slidesPerView: 2,
                      },
                      570: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      992: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    {ClientLogoList2.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            className="cl-size-sm"
                            theme="logo-light"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb">
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="list-unstyled client-logo-style-02">
                    {ClientLogoList.map((val, ind) => (
                      <li key={ind}>
                        <ClientLogo data={val.imgSrc} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsClientLogo;
