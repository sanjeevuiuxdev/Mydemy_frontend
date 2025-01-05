import PageTitle from '@/components/PageTitle'
import { ThemeContext } from '@/context/ThemeContext'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const CourseProgress = () => {

    const { backendUrl, userData } = useContext(ThemeContext)

    const { courseId } = useParams()

    const [courseLecture, setCourseLecture] = useState([])
    const [selectedLecture, setSelectedLecture] = useState(null)
    const [completedLectures, setCompletedLectures] = useState([]);
    const getLectures = async () => {
        // console.log(courseId);
        try {
            const response = await axios.get(backendUrl + `/api/v1/course/${courseId}/leature/get`)
            if (response.data.success) {
                console.log('lecture data', response.data.leatures.lectures);
                setCourseLecture(response.data.leatures.lectures || [])
                setSelectedLecture(response.data.leatures.lectures[0])
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get completed lecture
    const fetchCompletedLecter = async () => {
        try {
            const response = await axios.post(backendUrl+`/api/v1/course/get-completed`,{userId : userData._id})
            if (response?.data?.success) {
                setCompletedLectures(response.data.completedLectures || []);
            }
        } catch (error) {
            console.error("Error fetching completed lectures:", error);
        }
    }


useEffect(() => {
    if (userData?._id) {
        fetchCompletedLecter();
    }
}, [userData?._id]);

    // handle playlist button
    const handleLectureClick = async (item) => {
        setSelectedLecture(item)
        if (!completedLectures.includes(item._id)) {
            const updatedLecture = [...completedLectures, item?._id]
            setCompletedLectures(updatedLecture);
            console.log("user id",userData._id);
            console.log('lecture id',item._id);

            // save to backend
            await axios.post(backendUrl+`/api/v1/course/update-completed`, { userId: userData?._id, lectureId: item?._id })
        }
    }

    useEffect(() => {
        getLectures()
    }, [courseId])

    return (
        <div>
            <div>
                <PageTitle title={"Watch Your Course"} />
            </div>
            <div className='container'>
                <div style={{ padding: "70px 0px" }}>
                    <div className='row'>
                        {/* video showcase */}
                        <div className='col-6'>
                            <div>
                                <video src={selectedLecture?.videoUrl} style={{ borderRadius: "20px" }} controls>Your browser does not support the video tag.</video>
                            </div>
                        </div>
                        {/* video playlist showcase */}
                        <div className='col-6'>
                            <div style={{ paddingLeft: "40px" }}>
                                <h3 style={{ fontSize: "24px", padding: "20px 0px" }}>All Lectures</h3>
                                {
                                    courseLecture.map((item, index) => (

                                        <div onClick={() => handleLectureClick(item)} style={{ display: "flex", alignItems: "center", border: "1px solid #c8c8c8", padding: "15px", borderRadius: "12px", marginBottom: "10px", cursor: "pointer", justifyContent: "space-between" }} key={index}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                {selectedLecture?._id === item._id ? (<PlayCircleIcon style={{ color: "#07a698", fontSize: "22px" }} />) : (<PlayCircleIcon style={{ color: "grey", fontSize: "22px" }} />)}
                                                <p style={{ marginLeft: "10px", textTransform: "capitalize" }}>{item?.leatureTitle}</p>
                                            </div>
                                            {/* <span style={{ background: "green", color: "white", padding: "5px 10px", borderRadius: "5px", fontSize: "10px" }}>Completed</span> */}
                                            {/* Completed Button (Conditional) */}
                                            {completedLectures.includes(item._id) ? (
                                                <span style={{
                                                    background: "#07a698",
                                                    color: "white",
                                                    padding: "5px 10px",
                                                    borderRadius: "5px",
                                                    fontSize: "10px"
                                                }}>
                                                    Completed
                                                </span>
                                            ) : (
                                                <button
                                                    onClick={() => handleLectureClick(item)}
                                                    style={{
                                                        background: "#3956ff",
                                                        color: "white",
                                                        padding: "5px 10px",
                                                        borderRadius: "5px",
                                                        fontSize: "10px"
                                                    }}
                                                >
                                                    Mark as Complete
                                                </button>
                                            )}
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseProgress
