import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h1 className="text-primary">Contact</h1>
                    <h3>Always  connect with us</h3>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                   <div className="form-group">
                           <input type="text" className="form-control" placeholder="Full Name "/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address "/>
                       </div>
                       <div className="form-group">
                           <input type="number" className="form-control" placeholder="Phone Number "/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message "></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;