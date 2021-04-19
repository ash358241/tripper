import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./ServiceCard.css";


const ServiceCard = ({serviceData}) => {
    console.log(serviceData)
    const { price, name, description, imageURL, _id } = serviceData;

    const history = useHistory();
    const handleClick = (serviceId) => {
        const url = `/service/${serviceId}`;
        history.push(url);
    }
    return (


        <Card id="card" className="text-center" style={{border: "none"}} >
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title><p>${price}</p></Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Button onClick={() => handleClick(_id)} variant="info">Place Order</Button>
        </Card.Body>
      </Card>











        // <div className="card trans-card text-center" id="clientReview">
        //     <Link to={`/orders/${_id}`}>
        //     <div className="">
        //         <img style={{width:'100%'}} src={imageURL} alt=""/>
        //         <h3>{name}</h3>
        //             <h5 className="m-0">${price}</h5>
        //     </div>
        //     <div className="card-body">
        //         <h4 className="card-text text-secondary">{description}</h4>
        //     </div>
        //     </Link>
            
        // </div>
    );
};

export default ServiceCard;