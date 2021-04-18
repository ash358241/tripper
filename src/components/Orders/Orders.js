import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";

const Orders = () => {
	document.title = "Orders";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const [formSuccessMessage, setFormSuccessMessage] = useState(null);
    const [formErrorMessage, setFormErrorMessage] = useState(null);

	const { serviceId } = useParams();
	const [order, setOrder] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/service/${serviceId}`)
			.then((res) => res.json())
			.then(data => setOrder(data));
	}, [serviceId]);

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		fetch("http://localhost:5000/addOrder", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then(success => {
                if (success) {
                    setFormSuccessMessage('Service Added successfully ✔️')
                    setFormErrorMessage(null);
                    document.getElementById('myform').reset(); //reset form data
                } else {
                    setFormErrorMessage('Service Added failed ❌')
                    setFormSuccessMessage(null);
                }
            })
            .catch(err => console.log(err))
	};

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


				<form className="customFormStyle mb-5" onSubmit={handleSubmit(onSubmit)} id="myform">

				<div className="form-group animate__animated animate__fadeInRight">
					<input type="text" {...register("name")} name="name" className="form-control form-control-lg" maxlength="20" value={loggedInUser.name} placeholder="Your Name"/* value={name} */ />
				</div>

				<div className="form-group animate__animated animate__fadeInRight">
					<input type="email" {...register("email")} name="email" className="form-control form-control-lg" maxlength="25" value={loggedInUser.email}  placeholder="Your Email" />
				</div>

				<div className="form-group animate__animated animate__fadeInRight">
					<input type="text" {...register("title")} name="title" className="form-control form-control-lg" maxlength="25" value={order.name} placeholder="Order Title" />
				</div>

				<div className="form-group animate__animated animate__fadeInRight">
					<input type="digit" {...register("price")} name="price" className="form-control form-control-lg" maxlength="25" value={order.price} placeholder="Order Price"/>
				</div>


				<div className="d-flex justify-content-between">
					<button type="submit" className="btn btn-success btnSubmit animate__animated animate__fadeInRight" >Submit</button>

					<div>
						{
							formSuccessMessage && <p className="animate__animated animate__fadeInDown formSubmitMsgStyle">{formSuccessMessage}</p>
						}
						{
							formErrorMessage && <p className="animate__animated animate__fadeInDown" style={{ color: 'red' }}>{formErrorMessage}</p>
						}
					</div>
				</div>

				</form>

				<h3>Pay for me: </h3>

				<ProcessPayment></ProcessPayment>

				</main>
			</div>
		</div>
	);
};

export default Orders;
