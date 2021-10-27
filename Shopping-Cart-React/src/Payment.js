import React from 'react';
// import './Payment.css';
// import {Redirect} from 'react-router-dom'


const Payment = () => {
    // if(!authorized){
    //     return <Redirect to="/cart"/>
    // }
    return (
         <div>            
             <div class="card">
                <div class="card-top border-bottom text-center"> <a href="#"> Back to shop</a> <span id="logo">Shoping Cart</span> </div>
                <div class="card-body">
                    <div class="row upper"> <span><i class="fa fa-check-circle-o"></i> Shopping bag</span> <span><i class="fa fa-check-circle-o"></i> Order details</span> <span id="payment"><span id="three">3</span>Payment</span> </div>
                    <div class="row">
                        <div class="col-md-7">
                            <div class="left border">
                                 <div class="row"> <span class="header">Payment</span>
                                    <div class="icons"> <img src="https://img.icons8.com/color/48/000000/visa.png" /> <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /> <img src="https://img.icons8.com/color/48/000000/maestro.png" /> </div>
                                </div>
                                <form> <span>Cardholder's name:</span> <input placeholder="Linda Williams" /> <span>Card Number:</span> <input placeholder="0125 6780 4567 9909" />
                                    <div class="row">
                                        <div class="col-4"><span>Expiry date:</span> <input placeholder="YY/MM" /> </div>
                                        <div class="col-4"><span>CVV:</span> <input id="cvv" /> </div>
                                    </div> <input type="checkbox" id="save_card" class="align-left" /> <label for="save_card">Save card details to wallet</label>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="right border">
                                <div class="header">Order Summary</div>
                                <p> items</p>
                                <div class="row item">
                                    <div class="col-4 align-self-center"><img class="img-fluid" src=""/></div>
                                        <div class="col-8">
                                            <div class="row"><b></b></div>
                                            <div class="row text-muted"></div>
                                            <div class="row">Qty:</div>
                                        </div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-4 align-self-center"><img class="img-fluid" src=""/></div>
                                            <div class="col-8">
                                                <div class="row"><b></b></div>
                                                <div class="row text-muted"></div>
                                                <div class="row">Qty:</div>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div class="row lower">
                                            <div class="col text-left">Subtotal</div>
                                            <div class="col text-right"></div>
                                        </div>
                                        <div class="row lower">
                                            <div class="col text-left">Delivery</div>
                                            <div class="col text-right">Free</div>
                                        </div>
                                        <div class="row lower">
                                            <div class="col text-left"><b>Total to pay</b></div>
                                            <div class="col text-right"><b></b></div>
                                        </div>
                                        <div class="row lower">
                                            <div class="col text-left"><a href="#"><u>Add promo code</u></a></div>
                                        </div> <button class="btn">Place order</button>
                                        <p class="text-muted text-center">Complimentary Shipping & Returns</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

        );
};

                export default Payment;