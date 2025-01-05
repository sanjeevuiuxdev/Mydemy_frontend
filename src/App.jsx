import { ToastContainer } from 'react-toastify';
import './App.css'
import Login from './pages/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MyLearning from './pages/MyLearning';
import MyProfile from './pages/MyProfile';
import CourseDetail from './pages/CourseDetail';
import Layout from './components/ui/Layout';
import CourseProgress from './pages/CourseProgress';
import Footer from './components/Footer';
import AllCourses from './pages/AllCourses';

function App() {

  const location = useLocation();
  const noFooterRoute = ['/login']

  return (
    <div>
      <ToastContainer />
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mylearning' element={<MyLearning />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/coursedetail/:courseId' element={<CourseDetail />} />
        <Route path='/courseprogress/:courseId' element={<CourseProgress />} />
        <Route path='/all-courses' element={<AllCourses />} />
      </Routes>

      {!noFooterRoute.includes(location.pathname) && <Footer />}

      {/* <Footer /> */}
      
    </div>
  )
}

export default App
