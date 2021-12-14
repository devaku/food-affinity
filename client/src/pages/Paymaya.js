import React, { Component } from 'react';
import paymaya from 'paymaya-js-sdk';
import * as api from '../api';

// DOCUMENTATION REFERENCE
// https://github.com/PayMaya/PayMaya-JS-SDK-v2

import '../css/paymaya.css';
import { Navigate } from 'react-router-dom';
import { GetLocalStorage } from '../services/utility';

class Paymaya extends Component {
    constructor(props) {
        super(props);

        // Get the orderID from the local storage
        // This is not how you should do this but IDK how else to do it.
        let zCookie = GetLocalStorage();

        this.state = {
            redirect: false,
            order_id: zCookie.order_id,
        };
    }

    componentDidMount() {
        this.createCreditCardForm();
    }

    createCreditCardForm = async () => {
        // Payment Key is same as the one in the server
        // This should be retrieved using a GET request or something
        paymaya.init('pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah', true);
        const iframeContainer = document.getElementById('iframe-container');
        paymaya
            .createCreditCardForm(iframeContainer)
            .addTransactionHandler((paymentToken) =>
                this.CreatePayment(paymentToken)
            );
    };

    CreatePayment = async (paymentToken) => {
        console.log(paymentToken);

        // UserID is constant but should not be. lol
        let user_id = 1;
        let response = await api.CREATE_PayMayaPayment(
            paymentToken,
            user_id,
            this.state.order_id
        );

        let { verificationUrl } = response;
        if (verificationUrl) {
            window.location.assign(`${verificationUrl}`);
        }

        // this.setState({ redirect: true });
    };

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Navigate to="/"></Navigate>;
        }
        return (
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h3 className="text-center">Sandbox Card Information</h3>
                    <pre>MASTERCARD</pre>
                    <pre>5123456789012346</pre>
                    <pre>12 2025</pre>
                    <pre>111</pre>
                </div>
                <div className="paymaya-form">
                    <div id="iframe-container" />
                </div>
            </div>
        );
    }
}

export default Paymaya;
