import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';


const Cta = () => {
    return (
        <div className='cta'>
            <div className="overlay">
            <div className='container'>
                {/* <div className='row'> */}
                    <div className='cta_content'>
                        <div className='bolt_icon_div'><BoltIcon className='bolt_icon' /><span>Top Class Courses</span></div>
                        <h3>50% Offer For Very First 50<br />
                            Student's & Mentors</h3>
                            <div>
                            <button className='button'><span>Register Account Now ➙</span></button>
                            </div>

                    </div>
                {/* </div> */}
            </div>
            </div>
        </div>
    )
}

export default Cta
