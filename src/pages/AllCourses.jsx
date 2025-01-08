import React, { useContext, useEffect, useState } from 'react'
// import Course from ''
import { ThemeContext } from '@/context/ThemeContext'
import BoltIcon from '@mui/icons-material/Bolt';
import Course from '@/components/Course';
import PageTitle from '@/components/PageTitle';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

const AllCourses = () => {

    const { publishedCourse, setPublishedCourse, backendUrl } = useContext(ThemeContext)
    const [allCourses, setAllCourses] = useState(publishedCourse)
    const [searchText, setSearchText] = useState('')

    // Fetch all courses on component load or when `publishedCourse` changes
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                if (!publishedCourse || publishedCourse.length === 0) {
                    const response = await axios.get(`${backendUrl}/api/v1/course/all/published/course`);
                    if (response?.data?.success && Array.isArray(response?.data?.publishedCourses)) {
                        setAllCourses(response.data.publishedCourses);
                        setPublishedCourse(response.data.publishedCourses); // Update context as well
                    } else {
                        setAllCourses([]);
                    }
                } else {
                    setAllCourses(publishedCourse);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
                setAllCourses([]);
            }
        };

        fetchCourses();
    }, [publishedCourse, backendUrl, setPublishedCourse]);


    const searchCourse = async (e) => {
        setSearchText(e.target.value)
        try {

            // If input is blank, fetch all courses
            if (e.target.value.trim() === "") {
                const allCoursesResponse = await axios.get(backendUrl + '/api/v1/course/all/published/course');
                if (allCoursesResponse?.data?.success && Array.isArray(allCoursesResponse?.data?.publishedCourses)) {
                    setAllCourses(allCoursesResponse?.data?.publishedCourses);
                } else {
                    setAllCourses([]);
                }
                return; // Exit the function early
            }

            const response = await axios.get(backendUrl + `/api/v1/course/search-course?query=${e.target.value}`)
            if (response?.data?.success && Array.isArray(response?.data?.searchedCourse)) {
                console.log(response?.data?.searchedCourse);
                setAllCourses(response?.data?.searchedCourse)
            } else {
                console.error('Invalid response format:', response?.data);
                setAllCourses([]);
            }
        } catch (error) {
            console.log('search error', error);
            setAllCourses([]);

        }
    }

    useEffect(() => {
        setAllCourses(publishedCourse)
    }, [])

    return (

        <div>
            <PageTitle title={'All Courses'} />
            <div className='section_layout'>
                <div className='container'>
                    <div>
                        <div className='row'>
                            {/* <div className='section_heading'>
            <div className='row'>
              <div className='bolt_icon_div'><BoltIcon className='bolt_icon' /><span>Top Class Courses</span></div>
              <h2>Explore Featured Courses</h2>
              <div></div>
            </div>
          </div> */}
                        </div>
                    </div>
                    <div className='search_box'>
                        <input onChange={searchCourse} value={searchText} type="text" placeholder='Search Course....' />
                        <SearchIcon className='search_icon' />
                    </div>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
                        {Array.isArray(allCourses) && allCourses.length > 0 ? (allCourses.map((item, index) => (
                            <Course id={item?._id} key={index} img={item.courseThumbnail} title={item.courseTitle} description={item.description} category={item.category} level={item.courseLevel} price={item.coursePrice} link={`/coursedetail/${item?._id}`} />
                        ))) : (<p>No courses available</p>)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllCourses
