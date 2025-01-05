import AboutCard from '@/components/AboutCard'
import AboutPlatform from '@/components/AboutPlatform'
import Blogs from '@/components/Blogs'
import Brands from '@/components/Brands'
import Courses from '@/components/Courses'
import Cta from '@/components/Cta'
import Expert from '@/components/Expert'
import HeroSection from '@/components/HeroSection'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutCard />
            <AboutPlatform />
            <Courses />
            <Cta />
            <Expert />
            <Testimonials />
            <Brands />
            <Blogs />
        </>
    )
}

export default Home
