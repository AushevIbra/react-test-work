import React  from 'react';
import { connect } from 'react-redux'
import ListProduct from './list_products';
import { Link } from 'react-router-dom';
import { toggleChecked } from '../../store/actions/products';
import { deleteItem } from '../../store/actions/cart';
import {textCountCart} from '../../functions';

const Products = ({products, cart, addCart, toggleChecked, deleteItem}) => {
    const handleClick = (product) => {
        console.log(product, 'zdesb')
        if(product[0].checked === false){
            addCart(product);
            toggleChecked(product[0].id);
        } else {
            toggleChecked(product[0].id);
            deleteItem(product[0].id);
        }

    }

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Рейтинг</th>
                        <th>Тренд</th>
                        <th>Ценовой сегмент</th>
                        <th>Отзывы покупателей</th>
                        <th>В корзину</th>
                    </tr>
                </thead>
                <tbody>
                {products.length > 0
                    ?
                    products.map(product => {
                        return(
                            <ListProduct product={product} key={product.id} onClick={() => {handleClick([product])}}/>
                        )
                    })
                    :
                    null

                }
                </tbody>
            </table>
            <div className="container-fluid">
                {cart != null && cart.length > 0
                    ?
                    <div className="red-line text-center">
                        Вы выбрали <span>{cart.length}</span> {textCountCart(cart)} <Link to='/cart' className="test">Перейти в корзину</Link>
                    </div>
                    :
                    <div className="gray-line text-center">
                        Пожалуйста, отметьте галочками несколько товаров
                    </div>
                }


            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.products.items,
        cart: state.cart.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCart: (data) => dispatch({
            type: "ADD_CART",
            payload: data
        }),
        toggleChecked: (data) => dispatch(toggleChecked(data)),
        deleteItem: data => dispatch(deleteItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
