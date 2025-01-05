import React, { useContext, useEffect, useState } from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import PageTitle from '@/components/PageTitle'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Course from '@/components/Course'
import { ThemeContext } from '@/context/ThemeContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const MyProfile = () => {
    const { userData, setUserData, backendUrl, token, navigate } = useContext(ThemeContext)
    const [name, setName] = useState('')
    const [profilePhoto, setProfilePhoto] = useState(null)

    const [enrollerdCourse, setEnrollerdCourse] = useState([])
    console.log(enrollerdCourse._id);
    
    console.log('enrollerd COURSE',enrollerdCourse);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfilePhoto(file)
    }

    const updateUserProfile = async (e) => {
        e.preventDefault()
        console.log("clicked");
        try {
            // const { name, profilePhoto } = req?.body;
            // Prepare form data
            const formData = new FormData();
            formData.append("name", name);
            if (profilePhoto) {
                formData.append("profilePhoto", profilePhoto);
            }
            // const updatedProfile = await axios.put(backendUrl + '/api/v1/user/profile/update', { name, profilePhoto }, { headers: { token } })

            const updatedProfile = await axios.put(`${backendUrl}/api/v1/user/profile/update`, formData, { headers: { token, "Content-Type": "multipart/form-data", }, });

            if (updatedProfile?.data?.success) {
                console.log("Profile Updated: ", updatedProfile.data.updatedUser);
                setUserData(updatedProfile?.data?.updatedUser); // Update local state

                toast.success("Profile updated successfully")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getEnrollerdCourse = async () => {
        const userId = userData?._id
        // console.log(userId);
        if (!userId) {
            console.warn("User ID is not available yet.");
            return; // Exit early if userId is undefined
        }
        try {
            const response = await axios.post(backendUrl + '/api/v1/course/enrollerdcourse', { id: userId })
            if (response?.data?.success) {
                console.log('course Data', response?.data.user.enrolledCourses);
                setEnrollerdCourse(response?.data.user.enrolledCourses)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setName(userData?.name)
    }, [userData])

    useEffect(() => {
        if (userData) {
            getEnrollerdCourse();
        }
    }, [userData])

    return (
        <div>
            <div>
                <PageTitle title="My Profile" />
            </div>
            <div className='container mx-auto' style={{ padding: "70px 0" }}>
                <div className='flex '>
                    <div>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={userData.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
                            <AvatarFallback>{userData.name}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div style={{ paddingLeft: "40px" }}>
                        <div>
                            <p style={{ fontSize: "18px" }}>Name: <span>{userData.name}</span></p>
                            <p style={{ fontSize: "18px" }}>Email: <span>{userData.email}</span></p>
                            <p style={{ fontSize: "18px" }}>Phone No.: <span>7982475117</span></p>
                        </div>
                        <div style={{ marginTop: "15px" }}>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button>Edit Profile</Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit profile</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={updateUserProfile}>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="name" className="text-left">
                                                    Name
                                                </Label>

                                                <Input onchange={(e) => setName(e?.target?.value)} value={name} id="name" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="username" className="text-left">
                                                    Profile Image
                                                </Label>
                                                <Input onChange={handleFileChange} id="picture" type="file" className="col-span-3" />
                                            </div>
                                            {/* <button type='submit'>save</button> */}
                                        </div>
                                        <DialogFooter>
                                            <Button >Save changes</Button>
                                        </DialogFooter>
                                    </form>

                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>


                {/* courses yor are enrolled */}
                <div style={{ padding: "70px 0px 20px" }}>
                    <h2 style={{ textAlign: "left", fontSize: "28px", fontWeight: "bold" }}>My Courses</h2>
                </div>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
                    {
                        (enrollerdCourse?.length === 0) ? (<h4>You don't have any course.</h4>) : (
                            enrollerdCourse?.map((item, index) => (
                                <Course key={index} title={item.courseTitle} img={item?.courseThumbnail} description={item.description} category={item.category} price={item?.coursePrice} level={item?.courseLevel} link={`/courseprogress/${item?._id}`}/>
                            ))
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default MyProfile
