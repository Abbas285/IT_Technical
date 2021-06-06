import React from 'react'
import  './tempeletecss.css';

import { NavLink } from 'react-router-dom';
function CommonPage(props) {
    const {name,imgsrc,visit,btname}=props
    return (
        <>
          <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav-bg">
      <div className="row">
<div className="col-10 mx-auto ">
    <div className="row">
<div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<h1 >{name}<strong className="brand_name"> AbbasTechnical</strong>
</h1>

<h2 className="my-3" style={{fontWeight:"bolder"}}>
We are the team of talented developer making websites
</h2>
<div className="mt-3">
    <NavLink to={visit} className="btn_button-rounded">
        {btname}
    </NavLink>
</div>
         </div>

<div className="col-lg-6 order-1 order-lg-2 header-img"> 
<img src={imgsrc} className="img-fluid animated" alt="home img"/>
</div>
</div>
</div>
 </div>
</div>
</section>
        
        </>
    )
}

export default CommonPage
