import React from 'react'

function CustomerSupport() {
    document.title = "Customer Support";
    return (
        <>
            <div className="fullSupport">
            <div className="card" style={{width: "100%",height:"auto"}}>
                <div className="container">
            <div className="card-body">
                <h3 className="card-title text-center">Contact Us</h3>
                <small class="form-text text-center text-muted">We'll contact you through your registered E-mail to help resolve your query</small>
                <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" value="Lakshay" className="form-control disableInput" id="name" name="name" disabled />
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" value="raolakshayyadav02@gmail.com" className="form-control disableInput" id="email" aria-describedby="emailHelp" disabled />
                </div>
                <div className="form-group">
                    <label for="query">Your Query</label>
                    <textarea className="form-control" id="queryMessage" rows="3"></textarea>
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
