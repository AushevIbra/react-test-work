import React from 'react';

const ListProduct = ({product, onClick}) => {
    return(
        <tr className="text-center" key={product.id}>
            <td className="text-secondary">{product.id}</td>
            <td>{product.title}</td>
            <td> {product.rating} </td>
            <td>{product.trand}</td>
            <td>{product.currency}</td>
            <td>{product.reviews}</td>
            <td><input type="checkbox" className="form-control" defaultChecked={product.checked} onClick={onClick}/></td>
        </tr>
    )
}

export  default ListProduct;