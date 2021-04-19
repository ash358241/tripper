import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
// import Sidebar from '../Sidebar/Sidebar';


const AllOrders = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [status, setStatus] = useState(null)
    const [isEdit, setIsEdit] = useState(true);
    const [isDropDown, setIsDropDown] = useState(false);

    const [update, setUpdate] = useState({
        orderId: "",
        status: ""
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
        .then(res => res.json())
        .then(data => setOrdersData(data))
    }, [])

    const getId = (orderId) => {
        console.log(orderId)
        const newUpdate = { ...update };
        newUpdate.orderId = orderId;
        setUpdate(newUpdate);
        // console.log("object");
        setIsDropDown(true);
        setIsEdit(false);
    }

    const handleSelect = (e) => {
        console.log(e);
        const newUpdate = { ...update };
        newUpdate.status = e;
        setUpdate(newUpdate);
 
    }

    const handleUpdate = () => {
        console.log(update);
        fetch(`http://localhost:5000/updateOrder`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                // console.log("data updated");
                if (result) {
                    console.log(result);
                    // setStatus(update.status);
                    // const newUpdate = { ...update };
                    // newUpdate.bookingId = "";
                    // setUpdate(newUpdate);
 
                    const updatedOrder = ordersData.find(order => order._id === update.orderId);
                    updatedOrder.status = update.status;
                    const temp = ordersData.filter(order => order._id !== update.orderId);
                    const newOrdersData = [...temp, updatedOrder]
                    setOrdersData(newOrdersData);
                }
            })
    }

    const containerStyle = {
        height: "100%",
    }

    let i=1;

    return (
        <div className="container-fluid row" style={containerStyle}>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <Table className="animate__animated animate__fadeInLeft w-100" striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
            {
                ordersData.map(orders => 
                <tr className="text-center">
                <td>{i++}</td>
                <td>{orders.name}</td>
                <td>{orders.email}</td>
                <td>{orders.title}</td>
                <td>{status && update.orderId === orders._id ? status : orders.status}</td>
                <td>
                {
                    isEdit && <FontAwesomeIcon onClick={() => getId(orders._id)} icon={faEdit} style={{ color: "rgb(70, 221, 70)", fontSize: "25px" }}  ></FontAwesomeIcon>
                }
                {
                                        isDropDown && <div>
                                            <DropdownButton onSelect={handleSelect} alignRight variant='info' title="Change Status" id="dropdown-menu-align-right" >
                                                <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                                                <Dropdown.Item eventKey="Ongoing">Ongoing</Dropdown.Item>
                                                <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                                            </DropdownButton>
                                            <Button className='mt-1' onClick={handleUpdate} variant='info'>Update</Button>
                                        </div>
                                    }
                </td>
                </tr>
                )
                }
            
            </tbody>
                
            </Table>
            </div>
        </div>
    );
};

export default AllOrders;