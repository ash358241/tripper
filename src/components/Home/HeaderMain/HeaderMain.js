import React from 'react';
import bannerImg from '../../../images/bannerImg.jpg';

const HeaderMain = () => {
    const customStyle = {
        marginTop: '65px'
    }
    return (
        <main className="row d-flex align-items-center p-5" style={customStyle}>
            <div className="col-md-4 offset-md-1  animate__animated animate__fadeInLeftBig animate__slower">
                <h1 style={{ fontSize: 48, fontWeight: 'bold' }}>We Manage <br />  You Tour</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur voluptate at autem. Dolorem recusandae architecto nam provident! Repellendus inventore ipsa minima amet perferendis rerum dolor quis.</p>
                <button className="btn btn-dark" >Booking</button>
            </div>
            <div className="col-md-6 animate__animated animate__fadeInRightBig animate__slower">
                <img src={bannerImg} alt="" className="img-fluid" />
            
            </div>
        </main>
    );
};

export default HeaderMain;