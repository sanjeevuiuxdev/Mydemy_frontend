import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';


const AboutPlatform = () => {
    return (
        <div className='about_platform section_layout'>
            <div className='shape1'>
                <img src="../src/assets/about-shape-1.png" alt="" />
            </div>
            <div className='shape2'>
                <img src="../src/assets/about-shape-2.png" alt="" />
            </div>
            <div className='shape3'>
                <img src="../src/assets/about-shape-3.png" alt="" />
            </div>
            <div className='container'>
                <div>
                    <div className='row' style={{ alignItems: "center" }}>
                        <div className='col-xl-6'>
                            <div className='about_platform_img'>
                                <img src="../src/assets/about-img-3.png" alt="" />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div>
                                <div className='bolt_icon_div bolt_icon_div_border'><BoltIcon className='bolt_icon' /><span>About Our Platform</span></div>
                                <div className='about_platform_content'>
                                    <h4>We are innovative educational institution to the creation of thestudent</h4>
                                    <p>Our team consists of certified IT professionals with expertise in network security, cloud computing, software development, and technical support. With decades of combined experience, we provide strategic IT guidance and technical support tailored to your business needs.</p>
                                    <button className='button'><span>Browsem All ➙</span></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPlatform
