import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import './cart.css';

import {textCountCart} from '../../functions';

const Cart = ({cart}) => {
    if(cart.length == 0 )
        return <Redirect to="/"/>

    return (
        <div className="container">
            <h1>Ваши товары:</h1>
            <div style={{display: 'flex'}}>
                Вы выбрали {textCountCart(cart)}:
                {cart.map((item, key) => {
                    return(
                        <div key={item.title}>
                            {item.title}{++key !== cart.length ? ',' : ''}
                        </div>
                    )
                })}
            </div>

            <div className="row m-3">
                <div className="col-md-4">
                    <div className="box">1</div>
                    <span> Мы классные</span>
                </div>
                <div className="col-md-4">
                    <div className="box">2</div>
                    <span> Мы крутые</span>
                </div>
                <div className="col-md-4">
                    <div className="box">3</div>
                    <span> Даже сложно описать всю нашу крутость</span>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.items
    }
};

export default connect(mapStateToProps)(Cart);