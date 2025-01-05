import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';  // Import modules
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Brands = () => {
    return (
        <div className='brand_section'>
        <div className='bg_shape'>
            <img src="/assets/sponsor-shape.png" alt="" />
        </div>
        <div className='shape_star'>
            <img src="/assets/sponsor-1 (1).png" alt="" />
        </div>
        <div className='share_star_mini'>
            <img src="/assets/sponsor-2 (1).png" alt="" />
        </div>
            <div className='container'>
                <div>
                    <div className='row'>
                        <div>
                            <Swiper spaceBetween={50} slidesPerView={4} pagination={{ clickable: true }}  loop={true}>
                                <SwiperSlide>
                                    <div className='brand_img'>
                                        <img src="/assets/sponsor-1.png" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='brand_img'>
                                        <img src="/assets/sponsor-2.png" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='brand_img'>
                                        <img src="/assets/sponsor-3.png" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='brand_img'>
                                        <img src="/assets/sponsor-4.png" alt="" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='brand_img'>
                                        <img src="/assets/sponsor-1.png" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='brand_img'>
                                        <img src="/assets/sponsor-2.png" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='brand_img'>
                                        <img src="/assets/sponsor-3.png" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='brand_img'>
                                        <img src="/assets/sponsor-4.png" alt="" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
