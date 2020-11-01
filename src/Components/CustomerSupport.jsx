import React, { useState } from 'react'

function CustomerSupport() {
    document.title = "Customer Support";

    const [data,setData] = useState({
        name: "",
        email:"",
        contact:"",
        message:""
    })
    
    const inputEvent = (e) => {
        const {value,name} = e.target
        setData((preVal)=>{
            return {
                ...preVal,
                [name] : value
            }
        })
    }

    const submitQuery = (e) => {
        e.preventDefault();
        console.log(data)
        alert(`Hello ${data.name}, Your Message '${data.message}' is Successfully Logged Into console`)
    }

    return (
        <>
            <div className="fullSupport">
            <div className="card" style={{width: "100%",height:"auto"}}>
                <div className="container">
            <div className="card-body">
                <h3 className="card-title text-center">Contact Us</h3>
                <small className="form-text text-center text-muted">We'll contact you through your registered E-mail to help resolve your query</small>
                <form onSubmit={submitQuery}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={data.name} onChange={inputEvent} required className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" value={data.email} onChange={inputEvent} required className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact Number</label>
                    <input type="number" value={data.contact} onChange={inputEvent} required className="form-control" id="contact" name="contact" />
                </div>
                <div className="form-group">
                    <label htmlFor="query">Your Query</label>
                    <textarea className="form-control" id="queryMessage" onChange={inputEvent} required value={data.message} name="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default CustomerSupport
