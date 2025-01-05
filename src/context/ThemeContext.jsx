import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const currency = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()    

    const [token,setToken] = useState("")
    const [userData,setUserData] = useState({})
    const [publishedCourse,setPublishedCourse] = useState([])

    const getUserData = async () => {
        try {
            const userDetail = await axios.post(backendUrl+"/api/v1/user/userprofile",{},{headers:{token}})
            if(userDetail.data.success){
                // console.log("user",userDetail.data.user);
                setUserData(userDetail.data.user)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllPublishedCourse = async () => {
        try {
            const publishedCourse = await axios.get(backendUrl+'/api/v1/course/all/published/course')
            if(publishedCourse?.data?.success){
                console.log(publishedCourse?.data?.publishedCourses);
                setPublishedCourse(publishedCourse?.data?.publishedCourses)
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        if(!token && localStorage.getItem("MyDemy token")){
            setToken(localStorage.getItem("MyDemy token"))
        }
    },[])

    useEffect(()=>{
        if(token){
            getUserData()
        }
    },[token])

    useEffect(()=>{
        getAllPublishedCourse()
    },[])

    const value = {
        currency , backendUrl , token , setToken , navigate , userData , setUserData , publishedCourse,setPublishedCourse
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider