import React from 'react'
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Cards from '../Components/Cards'
import SimpleSlider from '../Components/Slick'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <About/>
        <Cards/>
        <SimpleSlider/>
        <Footer/>
    </div>
  )
}

export default Home