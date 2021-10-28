import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)
    return (
        <div className="container">
            <p>Choose Your Package</p>
            <h2>Select Your Best Package For Your Travel</h2>
            <div className="row">

                {
                    services.map(service => <div className="col-4" key={service._id}>
                        <img className="img-fluid" src={service.imageURL} alt="" />
                        <h2>{service.name}</h2>
                        <p>{service.description} </p>
                        <p>$76447</p>
                        <button className="btn btn-danger">Add To Card</button>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Services;