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
import NotFound from './pages/NotFound';
import AnimatedCursor from "react-animated-cursor"

function App() {

  const location = useLocation();
  const noFooterRoute = ['/login']

  return (
    <div>
      <AnimatedCursor innerSize={8} style={{ zIndex: 9999 }}
      outerSize={20}
      color='7, 166, 152'
      outerAlpha={0.5}
      innerScale={0.9}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 20,
            outerSize: 22,
            color: '7, 166, 152',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}/>
      <ToastContainer />
      <Navbar />


      <Routes>
        <Route path='*' element={<NotFound />} />
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
