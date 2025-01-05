import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';


const AboutCard = () => {
    return (
        <div className='section_layout'>
            <div className='container'>
                <div>
                    <div className='section_heading'>
                        <div className='row'>
                            <div className='bolt_icon_div'><BoltIcon className='bolt_icon'/><span>More About Us</span></div>
                            <h2>Explore Yourself All Over The World</h2>
                            <div></div>
                        </div>
                    </div>
                    <div className='row'>
                        {/* <------------------------card start--------------------------> */}
                        <div className='col-xl-3'>
                            <div className='about_card'>
                                <span className='number'>01</span>
                                <div className='card_img'>
                                    <img src="/assets/promo-icon-1.png" alt="" />
                                </div>
                                <div className='card_content'>
                                    <h3>80+ Online Courses</h3>
                                    <p>Tempus imperdiet nulla malpellen tesque libero nunc consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* <------------------------card end--------------------------> */}

                        {/* <------------------------card start--------------------------> */}
                        <div className='col-xl-3'>
                            <div className='about_card'>
                                <span className='number'>02</span>
                                <div className='card_img'>
                                    <img src="/assets/promo-icon-3.png" alt="" />
                                </div>
                                <div className='card_content'>
                                    <h3>Top Instructors</h3>
                                    <p>Tempus imperdiet nulla malpellen tesque libero nunc consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* <------------------------card end--------------------------> */}

                        {/* <------------------------card start--------------------------> */}
                        <div className='col-xl-3'>
                            <div className='about_card'>
                                <span className='number'>03</span>
                                <div className='card_img'>
                                    <img src="/assets/promo-icon-3.png" alt="" />
                                </div>
                                <div className='card_content'>
                                    <h3>Online Certificates</h3>
                                    <p>Tempus imperdiet nulla malpellen tesque libero nunc consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* <------------------------card end--------------------------> */}

                        {/* <------------------------card start--------------------------> */}
                        <div className='col-xl-3'>
                            <div className='about_card'>
                                <span className='number'>04</span>
                                <div className='card_img'>
                                    <img src="/assets/promo-icon-4.png" alt="" />
                                </div>
                                <div className='card_content'>
                                    <h3>6000k+ Members</h3>
                                    <p>Tempus imperdiet nulla malpellen tesque libero nunc consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* <------------------------card end--------------------------> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard
