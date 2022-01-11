import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {PAYPAL_CLIENT_ID} from "../dontPushConsts";

function Donations() {
    const [donated, setDonated] = React.useState(false);
    const [error, setError] = React.useState(null);
    
    const paypalRef = React.useRef();

    const paypalClientId = '';

    return(
        <div className="donations">
            <h1> Donations</h1>
            <br/>
            <PayPalScriptProvider options={{"client-id": PAYPAL_CLIENT_ID}}>
                <PayPalButtons />
            </PayPalScriptProvider>
        </div>
    )
}

export default Donations;