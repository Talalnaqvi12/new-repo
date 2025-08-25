import React from 'react'
import Header from './Pages/Header/Header'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Testimonials from './Components/Testimonial/Testimonial'
import ContactUs from './Components/Contact/ContactUs'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'
import Hero from './Components/Hero/Hero'
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import "https://unicons.iconscout.com/release/v4.0.8/css/line.css";
import '@iconscout/unicons/css/line.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {
  
  return (
    <HelmetProvider>
    <div>
      <Helmet>
          <title>ScaleCredo | Custom Web Development & DTC Brand Growth</title>
          <meta name="description" content="ScaleCredo helps DTC brands grow smarter with custom Shopify & WordPress development, multichannel e-commerce, and AI-driven automation strategies." />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="custom web development, Shopify development, WordPress development, DTC e-commerce, AI automation, digital growth agency, ScaleCredo" />
        </Helmet>
     <Header />
     {/* <Hero/> */}
     <About />
     <Service />
     <Projects />

     <ContactUs />
     <Footer />

     
    
    
    </div>
    </HelmetProvider>
  )
}

export default App
