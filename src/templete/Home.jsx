import React from 'react'
import  './tempeletecss.css';
import MainImg from '../img/4.jpg'

import Commonpage from './CommonPage'
function Home() {
    return (
        <>
     <Commonpage
     name="Grow your business with"
     imgsrc={MainImg}
     visit="/service"
     btname="Get Started"
     />
        </>
    )
}

export default Home
