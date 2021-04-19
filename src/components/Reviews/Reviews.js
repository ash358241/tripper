import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
// import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section style={{marginBottom:"80px"}}>

            <div className="container my-5">
                <div>
                    <h1 className="text-center">Clients <span style={{ color: '#7AB259' }}>Testimonial</span></h1>
                </div>

                <div className="card-deck mt-5">
                    {
                        reviews.map(reviewData => <Review reviewData={reviewData} key={reviewData._id}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;