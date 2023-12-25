import Head from 'next/head'
import Navbar from '@/components/navbar'
import Home from '@/components/home'
import About from '@/components/about'
import Project from '@/components/projects'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

const App = ()=>{
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Project />
            <Experience />
            <Contact />
            <Footer />
        </>
    )
}

export default App