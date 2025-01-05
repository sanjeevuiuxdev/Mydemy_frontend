import React from 'react'
import GppGoodIcon from '@mui/icons-material/GppGood';
import BoltIcon from '@mui/icons-material/Bolt';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
    return (
        // <div style={{ background: "#6568ff", padding: "100px 0px" }}>
        //     <div className='container mx-auto'>
        //         <h1 style={{ color: "#fff", fontSize: "42px", textAlign: "center", textTransform: "capitalize" }}>find the best courses for you</h1>
        //         <p style={{ color: "#fff", fontSize: "20px", textAlign: "center" }}>Discover, Learn, and upskill with our wide range of courses</p>
        //         <form>
        //             <div style={{ width: "40%", margin: "auto", display: "flex", alignItems: "center", marginTop: "20px" }}>
        //                 <input style={{ width: "100%", padding: "10px 20px", borderRadius: "20px", outline: "none" }} type="text" placeholder='Search course' />
        //                 <button style={{ background: "#4142c7", color: "#fff", padding: "10px 30px", borderRadius: "30px 30px 30px 30px", marginLeft: "-100px" }}>Search</button>
        //             </div>
        //         </form>
        //         <div>
        //             <p style={{padding:"12px 40px",background:"#fff",color:"#222",width:"fit-content",borderRadius:"40px",margin:"20px auto 0px"}}>Explore Courses</p>
        //         </div>
        //     </div>
        // </div>

        <div className='main_banner'>
            <div className='container'>
                <div>
                    <div className='row'>
                        {/* banner text */}
                        <div className="col-lg-5 banner_left_side">
                            <div className='bolt_icon_div'><BoltIcon className='bolt_icon'/><span>Welcome to Online Education</span></div>
                            <h1 className='banner_heading'>The World's Leading Distance Learning Provider</h1>
                            <p className='banner_para'>I'm here to help you find the confidence you need to feel amazing in your body! when an
                                unknown printer took a galley of type and scrambled it ecimen.</p>
                            <img className='banner_white_vector' src="https://html.rrdevs.net/edcare/assets/img/shapes/hero-shape-11.png" alt="" />
                            {/* <div>
                                <form>
                                    <div style={{ width: "100%", margin: "auto", display: "flex", alignItems: "center", marginTop: "20px" }}>
                                        <input style={{ width: "100%", padding: "15px 25px", borderRadius: "30px", outline: "none", border: "1px solid #E0E5EB",color:"#555",fontSize:"15px" }} type="text" placeholder='Search course' />
                                        <button className='button' style={{ borderRadius: "30px 30px 30px 30px", marginLeft: "-100px" }}><span>Search</span></button>
                                    </div>
                                </form>
                            </div> */}

                            <div className='banner_icon_para'>
                                <div className='flex mr-6'><GppGoodIcon style={{color:"#07a698"}}/><p> Experts Advisors</p></div>
                                <div className='flex'><GppGoodIcon style={{color:"#07a698"}}/><p> 538+ Courses</p></div>
                            </div>

                            <div className='banner_buttons'>
                                <button className='button mr-4'><span>Contact Us ➙</span></button>
                                <button className='button button_white'><NavLink to="/all-courses"><span>Expoler ➙</span></NavLink></button>

                            </div>
                        </div>
                        {/* banner side bar */}
                        <div className="col-lg-5">
                            <div >
                                <img className='banner_right_img' src="https://html.rrdevs.net/edcare/assets/img/bg-img/hero-bg.png" alt="" />
                                <div className='floating_box2'>
                                    <div className='imgs_icons'>
                                        <img src='/src/assets/user.png' alt="" /> 
                                        <div className='count_instuctor'>
                                            <p>150+</p>
                                            <span>Assisted Students</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='floating_box'>
                                    <h3>Instructor</h3>
                                    <div className='imgs_icons'>
                                        <img src="https://html.rrdevs.net/edcare/assets/img/images/faq-thumb-1.png" alt="" />
                                        <img src="https://html.rrdevs.net/edcare/assets/img/images/faq-thumb-2.png" alt="" />
                                        <img src="https://html.rrdevs.net/edcare/assets/img/images/faq-thumb-3.png" alt="" />
                                        <img src="https://html.rrdevs.net/edcare/assets/img/images/faq-thumb-4.png" alt="" />
                                        <img src="https://html.rrdevs.net/edcare/assets/img/images/faq-thumb-5.png" alt="" />
                                        <div className='count_instuctor'>
                                            <p>200+</p>
                                            <span>Instuctor</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
