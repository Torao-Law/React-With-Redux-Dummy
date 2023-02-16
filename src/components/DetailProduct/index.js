import React from 'react'
import { connect } from 'react-redux'
import { ProductSelected } from '../../Redux/Action'

function DetailProduct({detailProduct}) {
    if(!detailProduct) {
        return <div>Pilih Product...</div>
    }
    const {id, product, stock, price} = detailProduct

    return (
        <div>
            <h1>{product}</h1>
            <p>{id}</p>
            <p>{stock}</p>
            <p>{price}</p>
        </div>
    )
}

const ListToProps = (product) => {
    return { detailProduct: product.Selected }
}

export default connect(ListToProps, {ProductSelected})(DetailProduct)
