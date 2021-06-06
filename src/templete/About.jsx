import React from 'react'
import Commonpage from './CommonPage'
import MainImg from '../img/4.jpg'
import  './tempeletecss.css';
function About() {
    return (
      
        <>
        <Commonpage
        name="Wellcome to About page"
        imgsrc={MainImg}
        visit="/contact"
        btname="Contact Now"
        />
        </>
    )
}

export default About
