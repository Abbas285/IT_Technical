import React from 'react'
import MainImg from '../img/4.jpg'
function Card(props) {
    const {imges,tittles,cardtexts,cardbuttontext,ids}=props
    return (
        <>
        <div className="col-md-4 col-10 mx-auto">

<div className="card rounded" key={ids} >
  <img src={imges} className="card-img-top img-fluid"  alt={imges}/>

  <div className="card-body">
    <h5 className="card-title">{tittles}</h5>
    <p className="card-text">{cardtexts}</p>
    <a href="#" className="btn btn-primary">{cardbuttontext}</a>
  </div>

</div>
</div>
        </>
    )
}

export default Card
