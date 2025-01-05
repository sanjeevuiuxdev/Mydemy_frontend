import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';

const Blogs = () => {
    return (
        <div className='section_layout'>
            <div className='container'>
                <div>
                    <div className='section_heading'>
                        <div className='row'>
                            <div className='bolt_icon_div'><BoltIcon className='bolt_icon' /><span>News & Blogs</span></div>
                            <h2>Latest News Updates</h2>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {/* <------------------------card start--------------------------> */}
                    <div className='col-xl-4'>
                        <div className='blog_card'>
                            <img src="/assets/post-7.png" alt="" />
                            <div className='blog_card_content'>
                                <div className='time_date'>
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    <span>4 January, 2025</span>
                                </div>
                                <h2>The Impact of Technology Modern Classrooms Education</h2>
                            </div>
                            <div className='blog_button'>
                                <button className='button'><span>Read More ➙</span></button>
                            </div>
                        </div>
                    </div>
                    {/* <------------------------card end--------------------------> */}

                    {/* <------------------------card start--------------------------> */}
                    <div className='col-xl-4'>
                        <div className='blog_card'>
                            <img src="/assets/post-8.png" alt="" />
                            <div className='blog_card_content'>
                                <div className='time_date'>
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    <span>4 January, 2025</span>
                                </div>
                                <h2>The Impact of Technology Modern Classrooms Education</h2>
                            </div>
                            <div className='blog_button'>
                                <button className='button'><span>Read More ➙</span></button>
                            </div>
                        </div>
                    </div>
                    {/* <------------------------card end--------------------------> */}

                    {/* <------------------------card start--------------------------> */}
                    <div className='col-xl-4'>
                        <div className='blog_card'>
                            <img src="/assets/post-9.png" alt="" />
                            <div className='blog_card_content'>
                                <div className='time_date'>
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    <span>4 January, 2025</span>
                                </div>
                                <h2>The Impact of Technology Modern Classrooms Education</h2>
                            </div>
                            <div className='blog_button'>
                                <button className='button'><span>Read More ➙</span></button>
                            </div>
                        </div>
                    </div>
                    {/* <------------------------card end--------------------------> */}
                    

                </div>
            </div>
        </div>
    )
}

export default Blogs
