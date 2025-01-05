import React, { useContext } from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ThemeContext } from '@/context/ThemeContext'
import { NavLink } from 'react-router-dom'
import ClassIcon from '@mui/icons-material/Class';

const Course = ({img,title,category,level,price,id,link,description}) => {
    const {currency,publishedCourse,setPublishedCourse} = useContext(ThemeContext)
    console.log('published course data',publishedCourse);
    return (
        <div>
            <NavLink to={link}>
            <div className='course_card'>
                <img src={img} alt="" />
                <div className='course_card_content'>
                <div>
                    <h2 className='course_card_title'>{title}</h2>
                    <p className='course_card_para'>{description.slice(0, 50)}...</p>
                    <p className='course_category'><ClassIcon />{category}</p>
                </div>
                <div className='flex' style={{ alignItems: "center",justifyContent:"space-between",marginTop:"10px" }}>
                    <div className='flex' style={{ alignItems: "center",gap:"15px" }}>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Sanjeev</p>
                    </div>
                    <div>
                        <p style={{padding:"5px 15px",background:`#09dfca3d`,color:"#09a798",fontSize:"12px",borderRadius:"20px"}}>{level}</p>
                    </div>
                </div>
                <div style={{marginTop:"15px"}}>
                    <p style={{fontSize:"18px",fontWeight:"700"}}>Price:- {currency}{price}</p>
                </div>
                </div>
                <div className='course_card_button'>
                <button className='button'><span>Course Detail ➙</span></button>
                </div>

            </div>
            </NavLink>
        </div>
    )
}

export default Course
