import React from 'react'
import HelloCard from './HelloCard';

function Profile() {
    document.title = "My Profile";
    return (
        <>
          <div className="fullProfile">
                <HelloCard />
                <div className="card" style={{width:"100%",paddingBottom:"50px"}}>
                    <div className="card-body p-4">
                        <div className="d-flex">
                        <h6 className="card-title font-weight-bold mr-5 ">Personal Information</h6>
                        <a href="/" >Edit</a>
                        </div>

                        <div className="d-flex">
                            <input type="text" id="fname" className="form-control col-md-3 mr-4 disableInput" placeholder="First Name" value="Lakshay" disabled />
                            <input type="text" id="lname" className="form-control col-md-3 disableInput" placeholder="Last Name" value="Yadav" disabled />
                        </div>

                        <div className="mt-4">
                            <p className="ml-2">Your Gender</p>
                            <div className="d-flex ml-3">
                                <label htmlFor="Male" className="genderLabel">
                                <input type="radio" name="gender" id="Male" className="mr-1" disabled checked />
                                <span className="mr-4 genderSpan">Male</span>
                                </label>
                                <label htmlFor="Female" className="genderLabel">
                                <input type="radio" name="gender" id="Female" className="mr-1" disabled />
                                <span className="genderSpan">Female </span>
                                </label>
                        </div>
                        </div>

                        <div className="mt-5 ml-2">
                        <div className="d-flex">
                        <h6 className="card-title font-weight-bold mr-5 ">Email Address</h6>
                        <a href="/" className="emailEdit">Edit</a>
                        <a href="/">Change Password</a>
                        </div>
                        <div>
                            <input type="text" placeholder="Email Address" id="email" value="demo@gmail.com" className="form-control col-md-4 disableInput mt-2" disabled />
                        </div>
                        </div>

                        <div className="mt-5 ml-2">
                        <div className="d-flex">
                        <h6 className="card-title font-weight-bold mr-5 ">Mobile Number</h6>
                        <a href="/" className="mr-5">Edit</a>
                        </div>
                        <div>
                            <input type="text" placeholder="Mobile Number" id="pNumber" value="+91987456321" className="form-control col-md-4 disableInput mt-2" disabled />
                        </div>
                        </div>

                    </div>

                    <hr />

                    <div className="faqDiv">
                    <h6 className="card-title font-weight-bold mb-4">FAQs</h6>
                    <h6 className="card-title font-weight-bold mb-3">What happens when I update my email address (or mobile number)?</h6>
                    <p className="card-text font-weight-light mb-4">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                    <h6 className="card-title font-weight-bold mb-3">When will my Luckart account be updated with the new email address (or mobile number)?</h6>
                    <p className="card-text font-weight-light mb-4">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                    <h6 className="card-title font-weight-bold mb-3">What happens to my existing Luckart account when I update my email address (or mobile number)?</h6>
                    <p className="card-text font-weight-light mb-4">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                    <h6 className="card-title font-weight-bold mb-3">Does my Seller account get affected when I update my email address?</h6>
                    <p className="card-text font-weight-light mb-4">Luckart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                    </div>

                    <div>
                    <a href="/" className="ml-5">Deactivate Account</a>  
                    </div>
                    </div>
                </div>  
        </>
    )
}

export default Profile
