import { ThemeContext } from '@/context/ThemeContext'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import moment from 'moment';

const CourseDetail = () => {

    const navigate = useNavigate()

    const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID
    const { backendUrl, userData } = useContext(ThemeContext)
    const { courseId, leatureId } = useParams()
    const [courseDetail, setCourseDetail] = useState({})
    const [lectureData, setLectureData] = useState([])
    const [isEnrolled, setIsEnrolled] = useState(false)
    console.log(RAZORPAY_KEY_ID, backendUrl);
    console.log('user data', userData.enrolledCourses);


    // console.log('user data',userData);


    const getCourseDetail = async () => {
        try {
            const response = await axios.get(backendUrl + `/api/v1/course/getsinglecourse/${courseId}`)
            if (response?.data?.success) {
                setCourseDetail(response?.data?.getSingle)
                setLectureData(response?.data?.getSingle?.lectures)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get course lecture data
    const courseLecture = async () => {
        try {
            const response = await axios.get(backendUrl + `/api/v1/course/${courseId}/leature/get`)
            if (response.data.success) {
                console.log('leature dar', response?.data?.leatures?.lectures);
                setLectureData(response?.data?.leatures?.lectures)
            }
        } catch (error) {
            console.log(error);
        }
    }


    const purchaseCourse = async (courseId, userId, amount) => {
        console.log(courseId, userId, amount);
        console.log("Request URL:", backendUrl + "/api/v1/purchase/purchase-course");
        try {
            const response = await axios.post(`${backendUrl}/api/v1/purchase/purchase-course`, { courseId, userId, amount })
            console.log("Purchase course response:", response.data);
            if (response?.data?.success) {
                const { order } = response.data
                // Razorpay checkout options
                const options = {
                    key: import.meta.env.RAZORPAY_KEY_ID,
                    amount: order.amount,
                    currency: order.currency,
                    name: "My Demy",
                    description: "Purchase Course",
                    image: "https://moodlyf.vercel.app/assets/images/site_logo/site_logo_primary.svg",
                    order_id: order.id,
                    handler: async function (response) {
                        // Send payment response to backend for verification
                        const verifyResponse = await axios.post(`${backendUrl}/api/v1/purchase/verify-payment`, {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        });

                        if (verifyResponse.data.success) {
                            alert("Payment successful!");
                            console.log(verifyResponse.data);
                        } else {
                            alert("Payment verification failed!");
                        }
                    }

                }
                // Open Razorpay checkout
                const razorpay = new Razorpay(options);
                razorpay.open();
            }
        } catch (error) {
            console.error("Error initiating Razorpay payment:", error);
        }
    }


    useEffect(() => {
        console.log('Updated Course Detail:', courseDetail);
    }, [courseDetail]);

    useEffect(() => {
        getCourseDetail()
    }, [courseId])

    useEffect(() => {
        courseLecture()
        console.log('leature data', lectureData);
    }, [courseId])

    useEffect(() => {
        if (userData?.enrolledCourses) {
            const isCourseEnrolled = userData?.enrolledCourses.includes(courseId)
            setIsEnrolled(isCourseEnrolled)
        } else {
            setIsEnrolled(false)
        }
    }, [userData, courseId])

    const naviagteToMyprofile = () => {
        navigate('/myprofile')
    }

    const purchasedCourse = false

    return (



        <div>
            <div>
                <div className='heading_information_section'>
                    <div className='bg_overlay'></div>
                    <div className='container'>
                        <h2 className='bowlby-one-sc-regular' style={{ fontSize: "36px", color: "#111" }}>{courseDetail?.courseTitle}</h2>
                        <p className='mt-3' style={{ fontSize: "18px" }}>{courseDetail.subTitle}</p>
                        <p className='mt-2'><span>Last Update:- </span>{moment(courseDetail.updatedAt).format('DD/MM/YYYY')}</p>
                        <p className='mt-2' style={{ color: "#555" }}><span style={{ color: "#222" }}>Student Enrollerd:- </span>{courseDetail?.enrollerdStudent?.length > 0 ? courseDetail?.enrollerdStudent?.length : "0"}</p>
                    </div>
                </div>
                <div className='container'>
                    <div className='course_detail_content'>
                        <div className='row'>
                            <div className='col-xl-8'>
                                <div className='course_left_side_content'>
                                    <div className='course_thumbnail'>
                                        <img src={courseDetail?.courseThumbnail} alt="" />
                                    </div>
                                    <div className='badge'>
                                        <span>Best Seller</span>
                                        <span>Latest</span>
                                    </div>
                                    <div style={{ marginBottom: "30px" }}>
                                        <h5 style={{ fontSize: "28px", marginBottom: "10px" }}>Description</h5>
                                        <p>{courseDetail?.description}</p>
                                    </div>
                                    <div>
                                        <div className='content_box'>
                                            <h4 style={{ fontSize: "28px", marginBottom: "10px" }}>Course Content</h4>
                                            <p style={{ marginBottom: "10px" }}>{lectureData?.length || 0} Lectures</p>
                                            {
                                                lectureData.map((item, index) => (
                                                    <div key={index}>
                                                        <p style={{ padding: "8px 0px", color: "#222" }}> <PlayCircleIcon /> {item?.leatureTitle}</p>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4'>
                                <div className='course_right_side_content'>
                                    <div className='video_sidebar'>
                                        {lectureData.length > 0 ? (
                                            <div>
                                                <video src={lectureData[0]?.videoUrl} style={{ borderRadius: "12px" }} controls>Your browser does not support the video tag.</video>
                                                <div style={{ padding: "15px", fontSize: "20px" }}>
                                                    <p style={{ marginBottom: "10px" }}>Introduction Video</p>
                                                    <hr />
                                                    {
                                                        isEnrolled ? (<button onClick={naviagteToMyprofile} style={{ width: "100%", padding: "15px 20px", background: "#222", color: "#fff", borderRadius: "12px", fontSize: "16px", marginTop: "20px" }}>View Course</button>) : (<button onClick={() => purchaseCourse(courseDetail?._id, userData?._id, courseDetail?.coursePrice)} style={{ width: "100%", padding: "15px 20px", background: "#07a698", color: "#fff", borderRadius: "12px", fontSize: "16px", marginTop: "20px" }}>Buy Course</button>)
                                                    }
                                                </div>
                                            </div>
                                        ) : (
                                            <p>No Video Demo Available.</p>
                                        )}
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

export default CourseDetail
