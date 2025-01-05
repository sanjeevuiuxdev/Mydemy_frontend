import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { ThemeContext } from '@/context/ThemeContext'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Person4Icon from '@mui/icons-material/Person4';

const Navbar = () => {
    const {token,navigate,setToken} = useContext(ThemeContext)

    const logoutUser = () => {
        navigate("/")
        toast.success("Wapas Jarur Aana")
        localStorage.removeItem("MyDemy token")
        setToken('')
    }

    return (
        <div className='container mx-auto' style={{padding:"15px 0"}}>
            <div className='navbar_main'>
                <div className='logo'>
                    <NavLink to='/'><img src={logo} style={{ width: "60%" }} alt="" /></NavLink>
                </div>
                <div className='menus'>
                    <ul className='menu_list'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li>About</li>
                        <li><NavLink to='/all-courses'>All Courses</NavLink></li>
                        <li>Contact</li>
                        {token ? (<><NavLink to='/myprofile'><li>My Profile</li></NavLink> <li style={{display:"flex",alignItems:"center"}} onClick={logoutUser}>Logout <ExitToAppIcon style={{marginLeft:"5px",color:"#cd0000"}}/></li> </>) : (<li style={{display:"flex",alignItems:"center"}}><NavLink to='/login'><Person4Icon style={{marginRight:"5px",color:"#07a698"}}/>Login</NavLink></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
