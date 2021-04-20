import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";
import { Button } from "react-bootstrap";

const Orders = () => {
	document.title = "Orders";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const [formSuccessMessage, setFormSuccessMessage] = useState(null);
    const [formErrorMessage, setFormErrorMessage] = useState(null);

	const [orderData, setOrderData] = useState(null);

	const [isBookingConfirm, setIsBookingConfirm] = useState(false)

	const { serviceId } = useParams();
	const [order, setOrder] = useState([]);

	useEffect(() => {
		fetch(`https://powerful-sierra-98148.herokuapp.com/service/${serviceId}`)
			.then((res) => res.json())
			.then(data => setOrder(data));
	}, [serviceId]);

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {


		const newData = {...data}
		
		newData.status = "Pending";

		setOrderData(newData)

		setOrderData(newData)

		console.log(data);
		
	};

	const handleSuccessPayment = paymentId => {
		console.log(paymentId)
		const dataOrder = {
			...orderData,
		    stripePaymentId: paymentId,
		}
		console.log(paymentId);
		setOrderData(dataOrder)

		setIsBookingConfirm(true)

		console.log(orderData);

	}

	const handleBooking = () => {
		fetch("https://powerful-sierra-98148.herokuapp.com/addOrder", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(orderData),
		})
			.then((res) => res.json())
			.then(success => {
                if (success) {
                    setFormSuccessMessage('Service Added successfully ✔️')
                    setFormErrorMessage(null);

                } else {
                    setFormErrorMessage('Service Added failed ❌')
                    setFormSuccessMessage(null);
                }
            })
            .catch(err => console.log(err))

	}

	

	const containerStyle = {
        height: "100%",
    }

	return (
		<div className="container-fluid row" style={containerStyle}>
			<div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
			<div className="col-md-10" style={{ height: '100vh', background: '#F4F7FC' }}>
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Orders</h4>
					{loggedInUser.email ? (
						<div>
							<img className="rounded-circle mx-2" src={loggedInUser.photoURL} alt="" />
							<span>{loggedInUser.name.split(" ").slice(0, 1)}</span>
						</div>
					) : (
						<div>
							<i className="fas fa-user"></i>
							<span>User</span>
						</div>
					)}
				</header>
				<main className="p-5">


				{
					!orderData && 
					<div>

				<form className="customFormStyle mb-5" onSubmit={handleSubmit(onSubmit)} id="myform">

				<div className="form-group animate__animated animate__fadeInRight">
					<input type="text" {...register("name")} name="name" className="form-control form-control-lg" value={loggedInUser.name} placeholder="Your Name"/* value={name} */ />
				</div>

				<div className="form-group animate__animated animate__fadeInRight">
					<input type="email" {...register("email")} name="email" className="form-control form-control-lg" value={loggedInUser.email}  placeholder="Your Email" />
				</div>

				<div className="form-group animate__animated animate__fadeInRight">
					<input type="text" {...register("title")} name="title" className="form-control form-control-lg" value={order.name} placeholder="Order Title" />
				</div>

				<div className="form-group animate__animated animate__fadeInRight">
					<input type="digit" {...register("price")} name="price" className="form-control form-control-lg" value={order.price} placeholder="Order Price"/>
				</div>

				<div className="d-flex justify-content-between">
					<button type="submit" className="btn btn-success btnSubmit animate__animated animate__fadeInRight" >Submit</button>
							
				</div>

				</form>
				</div>

				}

				{
					orderData &&
					<div className="my-3">
					<ProcessPayment handlePayment={handleSuccessPayment}></ProcessPayment>
					</div>
				}

					<div>
						{
							formSuccessMessage && <p className="animate__animated animate__fadeInDown formSubmitMsgStyle">{formSuccessMessage}</p>
						}
						{
							formErrorMessage && <p className="animate__animated animate__fadeInDown" style={{ color: 'red' }}>{formErrorMessage}</p>
						}
					</div>

					{
                			orderData && <Button onClick={handleBooking} disabled={isBookingConfirm === false}> Confirm Booking </Button>
                     }  

				</main>

			</div>

		</div>
	);
};

export default Orders;
