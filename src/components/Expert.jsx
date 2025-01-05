import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';


const Expert = () => {
    return (
        <div className='section_layout'>
            <div className='container'>
                <div>
                    <div className='section_heading'>
                        <div className='row'>
                            <div className='bolt_icon_div'><BoltIcon className='bolt_icon' /><span>Our Instructors</span></div>
                            <h2>Meet Our Expert Instructor</h2>
                            <div></div>
                        </div>
                    </div>
                    <div className='row'>
                        {/* <------------------------card start--------------------------> */}
                        <div className='col-xl-3'>
                            <div className='profile_card'>
                                <div className='profile_card_img'>
                                    <img src="../src/assets/team-9.png" alt="" />
                                </div>
                                <div className='profile_card_content'>
                                    <h3>Mason D. Logan</h3>
                                    <p>IT Trainier</p>
                                </div>
                                <div className='profile_card_media'>
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                    <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        {/* <------------------------card end--------------------------> */}

                        {/* <------------------------card start--------------------------> */}
                        <div className='col-xl-3'>
                            <div className='profile_card'>
                                <div className='profile_card_img'>
                                    <img src="../src/assets/team-10.png" alt="" />
                                </div>
                                <div className='profile_card_content'>
                                    <h3>Isabella E. Olivia</h3>
                                    <p>IT Trainier</p>
                                </div>
                                <div className='profile_card_media'>
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                    <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        {/* <------------------------card end--------------------------> */}

                        {/* <------------------------card start--------------------------> */}
                        <div className='col-xl-3'>
                            <div className='profile_card'>
                                <div className='profile_card_img'>
                                    <img src="../src/assets/team-11.png" alt="" />
                                </div>
                                <div className='profile_card_content'>
                                    <h3>David R. Connor</h3>
                                    <p>IT Trainier</p>
                                </div>
                                <div className='profile_card_media'>
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                    <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        {/* <------------------------card end--------------------------> */}

                        {/* <------------------------card start--------------------------> */}
                        <div className='col-xl-3'>
                            <div className='profile_card'>
                                <div className='profile_card_img'>
                                    <img src="../src/assets/team-12.png" alt="" />
                                </div>
                                <div className='profile_card_content'>
                                    <h3>Sophia S. Grace</h3>
                                    <p>IT Trainier</p>
                                </div>
                                <div className='profile_card_media'>
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                    <i class="fa fa-pinterest-p" aria-hidden="true"></i>
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

export default Expert
