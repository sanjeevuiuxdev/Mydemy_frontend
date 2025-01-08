import React, { useContext } from 'react'
import Course from './Course'
import { ThemeContext } from '@/context/ThemeContext'
import BoltIcon from '@mui/icons-material/Bolt';


const Courses = () => {

  const { publishedCourse, setPublishedCourse } = useContext(ThemeContext)

  return (
   <div className='section_layout'>
     <div className='container'>
      <div className=''>
        <div className='row'>
          <div className='section_heading'>
            <div className='row'>
              <div className='bolt_icon_div'><BoltIcon className='bolt_icon' /><span>Top Class Courses</span></div>
              <h2>Explore Featured Courses</h2>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {publishedCourse.length > 0 ? (<div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        {publishedCourse.map((item, index) => (
          <Course id={item?._id} key={index} img={item.courseThumbnail} title={item.courseTitle} description={item.description} category={item.category} level={item.courseLevel} price={item.coursePrice} link={`/coursedetail/${item?._id}`} />
        ))}
      </div>) : (<div style={{textAlign:"center"}}><img style={{width:"150px",margin:"auto"}} src='/assets/loading.gif'/><p style={{fontSize:"20px",fontWeight:"600"}}>Courses Are Loading Please Wait....</p></div>)}
      {/* <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        {publishedCourse.map((item, index) => (
          <Course id={item?._id} key={index} img={item.courseThumbnail} title={item.courseTitle} description={item.description} category={item.category} level={item.courseLevel} price={item.coursePrice} link={`/coursedetail/${item?._id}`} />
        ))}
      </div> */}
      
    </div>
   </div>
  )
}

export default Courses
