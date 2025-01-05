import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';  // Import modules
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BoltIcon from '@mui/icons-material/Bolt';


const Testimonials = () => {

    


    return (
        <div className='section_layout testimonial_section'>
            <div className='container'>
                <div>
                    <div className='row'>
                    <div className='section_heading'>
                        <div className='row'>
                            <div className='bolt_icon_div'><BoltIcon className='bolt_icon' /><span>Our Instructors</span></div>
                            <h2>Meet Our Expert Instructor</h2>
                            <div></div>
                        </div>
                    </div>
                        <div>
                            <Swiper spaceBetween={50} slidesPerView={2} pagination={{ clickable: true }}  modules={[Pagination, Navigation]} loop={true}>
                                <SwiperSlide>
                                    <div className='testimonial_card'>
                                        <div className='testimonial_img_content'>
                                            <img src="/assets/testi-author-1.png" alt="" />
                                            <div className='testimonial_para'>
                                                <p>"The course exceeded my expectations in every way. The materials were well-organized and easy to follow, making even the most complex concepts understandable. “</p>
                                            </div>
                                        </div>
                                        <div className='rating_name'>
                                            <div>
                                                <h5>David H. Smith</h5>
                                                <p>IT Student</p>
                                            </div>
                                            <div className='star_rating'>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <span>(4.7)</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='testimonial_card'>
                                        <div className='testimonial_img_content'>
                                            <img src="/assets/testi-author-1.png" alt="" />
                                            <div className='testimonial_para'>
                                                <p>"The course exceeded my expectations in every way. The materials were well-organized and easy to follow, making even the most complex concepts understandable. “</p>
                                            </div>
                                        </div>
                                        <div className='rating_name'>
                                            <div>
                                                <h5>David H. Smith</h5>
                                                <p>IT Student</p>
                                            </div>
                                            <div className='star_rating'>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <span>(4.7)</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='testimonial_card'>
                                        <div className='testimonial_img_content'>
                                            <img src="/assets/testi-author-1.png" alt="" />
                                            <div className='testimonial_para'>
                                                <p>"The course exceeded my expectations in every way. The materials were well-organized and easy to follow, making even the most complex concepts understandable. “</p>
                                            </div>
                                        </div>
                                        <div className='rating_name'>
                                            <div>
                                                <h5>David H. Smith</h5>
                                                <p>IT Student</p>
                                            </div>
                                            <div className='star_rating'>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <span>(4.7)</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='testimonial_card'>
                                        <div className='testimonial_img_content'>
                                            <img src="/assets/testi-author-1.png" alt="" />
                                            <div className='testimonial_para'>
                                                <p>"The course exceeded my expectations in every way. The materials were well-organized and easy to follow, making even the most complex concepts understandable. “</p>
                                            </div>
                                        </div>
                                        <div className='rating_name'>
                                            <div>
                                                <h5>David H. Smith</h5>
                                                <p>IT Student</p>
                                            </div>
                                            <div className='star_rating'>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <span>(4.7)</span>
                                            </div>
                                        </div>
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

export default Testimonials
