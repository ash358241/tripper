import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesCard = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section style={{ margin: 200 }}>

            <div className="container">
                <div>
                    <h1 className="text-center">Our <span style={{ color: '#7AB259' }}>Services</span></h1>
                </div>

                <div className="card-deck mt-5">
                    {
                        services.map(serviceData => <ServiceCard serviceData={serviceData} key={serviceData._id}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServicesCard;