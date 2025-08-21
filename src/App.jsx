import React from 'react'
import Header from './Pages/Header/Header'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Testimonials from './Components/Testimonial/Testimonial'
import ContactUs from './Components/Contact/ContactUs'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'
import Hero from './Components/Hero/Hero'

// import "https://unicons.iconscout.com/release/v4.0.8/css/line.css";
import '@iconscout/unicons/css/line.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {
  return (
    <div>
     <Header />
     {/* <Hero/> */}
     <About />
     <Service />
     <Projects />

     <ContactUs />
     <Footer />

     
    
    
    </div>
  )
}

export default App
