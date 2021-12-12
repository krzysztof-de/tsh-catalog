import React from 'react'
import ProductTile from '../molecues/ProductTile'
import {Wrapper} from './ProductsList.styles'

const ProductsList = () => {
    return (
        <Wrapper>
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
        </Wrapper>
    )
}

export default ProductsList
