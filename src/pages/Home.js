import React,{Fragment} from 'react'
import Header from "../components/header/Header"
import HeroSlider from "../components/hero-slider/HeroSlider"
import PopularMenu from "../components/popular-menu/PopularMenu"
import ChooseUs from "../components/choose-us/ChooseUs"
import MenuPack from "../components/menu-pack/MenuPack"
import Testimonial from "../components/testimonals/Testimonial"
import Download from "../components/download-section/Download"
import Footer from "../components/footer/Footer"
const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSlider/>
        <PopularMenu/>
        <ChooseUs/>
        <MenuPack/>
        <Testimonial/>
        <Download/>
        <Footer/>
      
    </Fragment>
  )
}

export default Home
