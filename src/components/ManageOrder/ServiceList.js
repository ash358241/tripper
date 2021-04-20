import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {

    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email, photoURL } = loggedInUser;

    useEffect(() => {
        fetch(`https://powerful-sierra-98148.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    console.log('order history', order);

    const containerStyle = {
        height: "100%",
    }

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://powerful-sierra-98148.herokuapp.com/deleteService/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    const orderData = order.filter(service => service._id !== id);
                    setOrder(orderData)
                }
            })
    }

    return (

        <div className="container-fluid row" style={containerStyle}>

            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-10" style={{ background: '#F4F7FC' }}>
                <div className="d-flex align-items-center dashboardHeaderBg p-5">
                    <h1 className="animate__animated animate__fadeInLeft">Service History</h1>
                    <div class="ml-auto">
                        <div className="row align-items-center animate__animated animate__fadeInRight">
                            <div className="col">
                                <h5>{name}</h5>
                                <p><small className="text-secondary">{email}</small></p>
                            </div>
                            <img src={photoURL} alt="" className="mx-3 rounded-circle" width="60" />
                        </div>
                    </div>
                </div>

                <div className="p-5 container">
                    <div className="animate__animated animate__fadeInRight row ">
                        {
                            order.map(service => <div className="col-md-6">
                                <div className="card custom-card-style my-3 border border-secondary rounded p-3">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <h5 class="card-title">Title: {service.title}</h5>
                                            <p>Price: ${service.price}</p>
                                            <button  onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete Service</button>
                                        </div >
                                        
                                    </div>
                                    
                                </div>
                            </div>)
                        }
                    </div>

                </div>
            </div>

        
        </div>

    );
};

export default ServiceList;