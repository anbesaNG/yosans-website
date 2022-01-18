import React from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer, PayPalHostedFieldsProvider, PayPalHostedField, usePayPalHostedFields} from "@paypal/react-paypal-js";
import {PAYPAL_CLIENT_ID} from "../dontPushConsts";

const currency = "USD";
const style = {"layout":"vertical", "label":"donate"}

const PpButtonWrapper = (props) => {
    //TODO: error handling 
    const [{options, isPending}, dispatch] = usePayPalScriptReducer();

    React.useEffect(() => {
        dispatch({
            type: "resetoptions",
            value: {
                ...options,
                currency: props.currency,
            },
        });
    }, [props.currency, props.showSpinner]);

    return(
        <div>
            { (props.showSpinner && isPending) && <div className="spinner"/>}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[props.amount, props.currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: props.amount,
                                        breakdown: {
                                            item_total: {
                                                currency_code: props.currency,
                                                value: props.amount,
                                            },
                                        },
                                    },
                                    items: [
                                        {
                                            name: "donation-exampllle", //update
                                            quantity: "1",
                                            unit_amount: {
                                                currency_code: props.currency,
                                                value: props.amount,
                                            },
                                            category: "DONATION",
                                        },
                                    ],
                                }
                            ]
                        })
                        .then((orderId) => {
                            //add here
                            return orderId;
                        });  
                }}
                onApprove={function (data, actions){
                    return actions.order.capture().then(function() {
                        //code after capture the order
                        alert('Thank you for your donation!');
                        console.log(data);
                    });
                }}
                onError={function (err){
                    // alert('error with submitting donation')
                    // console.log(err);
                    props.setError(err);
                    console.error(err);

                }}
            />
        </div>);

}

const DollarAmountForm = (props) => {
  
    return(
        <div className="donations-input">
            <label><h3>Prefered Donation Amount</h3></label>
            <span>$</span>
            <input 
                type='number'
                value={props.donationAmount}
                onChange={e => props.setDonationAmount(e.target.value)}
            />
        </div>
    );
}

function Donations() {
    const [donated, setDonated] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [donationAmount, setDonationAmount] = React.useState(1);
    
    const paypalRef = React.useRef();



    return(
        <div className="donations-page">
            <h1> Support Fere Project</h1>
            <p>Fere Project offers a great way to connect with high-achieving students and provide scholarships.</p>
            <p>Most students matriculate in Comboni College of Science & Technology located in Khartoum, Sudan. Other students are interested in the Ap-tech program, which offers a 3 year diploma course in Computer Science. Approximately, a student needs $2400 to complete four years of college to receive their degree. </p>
            
            <h3> Paypal donations coming soon</h3>

            <h2>Contact Us</h2> 

            <p>We want to hear from you whether you are a student in Sudan or an individual abroad, who would like to volunteer their time and expertise! Send us a message using the box below or email us at <a className="unstyled-link" href="mailto:fereproject@gmail.com">fereproject@gmail.com</a>.</p>

            {/* <div className="donation-input-button">
                <DollarAmountForm 
                    donationAmount={donationAmount}
                    setDonationAmount={setDonationAmount}
                />
                {donationAmount}
                <br/>
                <PayPalScriptProvider options={{"client-id": PAYPAL_CLIENT_ID, components: "buttons", "disable-funding":"credit"}}>
                    <PpButtonWrapper
                        amount={donationAmount}
                        currency={currency}
                        showSpinner={true}
                        error={error}
                        setError={setError}
                    />
                </PayPalScriptProvider>
            </div> */}

            <div>{error ? error.stringify : '.'}</div>
        </div>
    )
}
/* <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="4865X6VKQ75RU" />
<input type="hidden" name="no_recurring" value="0" />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form> */

export default Donations;