import React, { useState } from 'react'
import  './tempeletecss.css';
function Contact() {

    const [data,setdata]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:''
    })
    const inputEvent=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setdata((prev)=>{
            return {
                ...prev,
                [name]:value

            }

        })

    }
    const [getdata,getsetdata]=useState([]);
    const putdata=(e)=>{
        e.preventDefault()

getsetdata((prev)=>{
  return  [...prev,data]
})
alert(`Your Data  Name ${data.fullname} phone ${data.phone} email ${data.email} message ${data.message}`)
    }
    return (
       <>
       <div className="my-5">
           <h1 className="text-center " style={{fontWeight:"bolder"}}> Contact Us</h1>
           <div className=" container contact-div">
            <div className="row">
          <div className="col-md-6 col-10 mx-auto">
<form onSubmit={putdata}>
           <div className="mb-3">
  <label for="exampleFormControlInput1" 
  className="form-label">Full Name</label>
  <input type="text" r value={data.fullname} name="fullname" onChange={inputEvent}equired
  className="form-control" 
  id="exampleFormControlInput1" 
  placeholder="Enter Your Full Name"
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1"
   className="form-label">Phone Number</label>
  <input type="number" value={data.phone} name="phone" onChange={inputEvent} required
  className="form-control" 
  id="exampleFormControlInput1" 
  placeholder="Mobile Number"
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" 
  className="form-label">Email address</label>
  <input type="email"  value={data.email} name="email" onChange={inputEvent} required
  className="form-control" 
  id="exampleFormControlInput1" 
  placeholder="name@example.com"
  />
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" 
  className="form-label">Message</label>
  <textarea className="form-control" 
   required
   value={data.message}
   onChange={inputEvent}
   name="message"
  id="exampleFormControlTextarea1"
   rows="3"
   ></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
           </form>
          </div>
            </div>
           </div>

       </div>
       </>
       
    )
}

export default Contact
