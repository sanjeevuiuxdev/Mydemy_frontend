import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='container'>
                {/* <-------------------upper footer start-----------------> */}
                <div className='upperfooter'>
                    <div className='row'>
                        <div className="col-xl-6">
                            <div className='footer_card'>
                                <div className='bg'>
                                    <img src="/src/assets/popular-shape-2.png" alt="" />
                                </div>
                                <div className='person_bg'>
                                    <img src="/src/assets/popular-shape-1.png" alt="" />
                                </div>
                                <div className='person'>
                                    <img src="/src/assets/popular-men-1.png" alt="" />
                                </div>
                                <div>
                                    <p>Become Student</p>
                                    <h2>Get The Best Courses &
                                        Upgrade Your Skills</h2>
                                    <button className='button'><span>Read More ➙</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className='footer_card'>
                                <div className='bg'>
                                    <img src="/src/assets/popular-shape-2.png" alt="" />
                                </div>
                                <div className='person_bg'>
                                    <img src="/src/assets/popular-shape-1.png" alt="" />
                                </div>
                                <div className='person'>
                                    <img src="/src/assets/popular-men-2.png" alt="" />
                                </div>
                                <div>
                                    <p>Become Student</p>
                                    <h2>Get The Best Courses &
                                        Upgrade Your Skills</h2>
                                    <button className='button'><span>Read More ➙</span></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <-------------------upper footer end-----------------> */}
            </div>

            <div className='lowerfooter'>
                <div className='container'>
                    <div className='footer_navmenu'>
                        <div className='row'>
                            {/* col 1 */}
                            <div className='col-xl-3'>
                                <div className='footer_about'>
                                    <img src="/src/assets/logo2.png" alt="logo" />
                                    <p>Globally deploy synergistic opportunities after state of techno create information without iterate impactful internal.</p>
                                    <div className='profile_card_media footer_social_icons'>
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>

                            {/* col 2 */}
                            <div className='col-xl-3'>
                                <div className='footer_item'>
                                    <h5>Company Info</h5>
                                    <div className='footer_link'>
                                        <p>About Us</p>
                                        <p>Resource Center</p>
                                        <p>Careers</p>
                                        <p>Instructor</p>
                                        <p>Become A Teacher</p>
                                    </div>
                                </div>
                            </div>

                            {/* col 2 */}
                            <div className='col-xl-3'>
                                <div className='footer_item'>
                                    <h5>Useful Links</h5>
                                    <div className='footer_link'>
                                        <p>All Courses</p>
                                        <p>Digital Marketing</p>
                                        <p>Design & Branding</p>
                                        <p>Storytelling & Voice Over</p>
                                        <p>News & Blogs</p>
                                    </div>
                                </div>
                            </div>

                            {/* col 2 */}
                            <div className='col-xl-3'>
                                <div className='footer_item'>
                                    <h5>Resourses</h5>
                                    <div className='footer_link'>
                                        <p>Community</p>
                                        <p>Support</p>
                                        <p>Video Guides</p>
                                        <p>Documentation</p>
                                        <p>Security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='copyright'>
                <p>Copyright © 2025 MyDemy. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
