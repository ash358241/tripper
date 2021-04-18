import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie2PCEVS64dEZZyCi3BONZ55IbU6e4ZQfe2ii8soK0PotXPLtSVDpTz7mrzeCrEskbZfYFb8MGMvcLBADyKNKGI004NT7ILaN');


const ProcessPayment = () => {
    return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm></SimpleCardForm>
    </Elements>
    );
};

export default ProcessPayment;