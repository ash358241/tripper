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
        <section style={{width: '80%', margin: '0 auto'}} >

            <div className="container-fluid my-5">
                <div>
                    <h1 className="text-center">Our <span style={{ color: '#7AB259' }}>Packages</span></h1>
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