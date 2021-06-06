import React from 'react'
import  './tempeletecss.css';
import {CardData} from './CardData'

import Card from './Card';
function Services() {
    return (
       <>
   <div className="mt-5">
<h1 className="text-center mb-3" style={{fontWeight:"bolder"}}>Our Services</h1>
   </div>
   <div className="container-fluid mb-5">
<div className="row "> 
<div className="col-10 mx-auto">
<div className="row gy-3">
    {
        CardData.map((val,index)=>{
            
            return <Card 
            key={index}
            imges={val.imgs}
            tittles={val.tittle}
            cardtexts={val.cardtext}
            cardbuttontext={val.cardbutton}
            ids={index}
            />
        })
    }


</div>

</div>
</div>
   </div>
       </>
    )
}

export default Services
