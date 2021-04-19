import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const [formSuccessMessage, setFormSuccessMessage] = useState(null);
    const [formErrorMessage, setFormErrorMessage] = useState(null);

    const [admin, setAdmin] = useState({});

    const handleAddAdmin = (e) => {
		console.log(admin);
		fetch("http://localhost:5000/addAdmin", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(admin),
		})
			.then((res) => res.json())
			.then(success => {
                if (success) {
                    setFormSuccessMessage('Admin Added successfully ✔️')
                    setFormErrorMessage(null);
                } else {
                    setFormErrorMessage('Admin Added failed ❌')
                    setFormSuccessMessage(null);
                }
            })
            .catch(err => console.log(err))
            e.preventDefault();
	};

    const containerStyle = {
        height: "100%",
    }

    const handleBlur = (e) => {
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    return (
        <div className="container-fluid row" style={containerStyle}>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <form className="my-3" onSubmit={handleAddAdmin}>
                <div className="form-group animate__animated animate__fadeInRight">
                <input onBlur={handleBlur} name="email" type="email" placeholder="Admin Email"/>
                </div>
                
                <input className="btn btn-info btn btnSubmit animate__animated animate__fadeInRight" type="submit" value="Add Admin"/>

                <div>
						{
							formSuccessMessage && <p className="animate__animated animate__fadeInDown formSubmitMsgStyle">{formSuccessMessage}</p>
						}
						{
							formErrorMessage && <p className="animate__animated animate__fadeInDown" style={{ color: 'red' }}>{formErrorMessage}</p>
						}
					</div>
            </form>
            </div>
        </div>
    );
};

export default MakeAdmin;