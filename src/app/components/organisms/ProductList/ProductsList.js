import React from 'react'
import ProductTile from 'app/components/molecues/ProductTile'
import {Wrapper} from './ProductsList.styles'

const ProductsList = () => {
    return (
        <Wrapper>
            <ProductTile active promo/>
            <ProductTile active/>
            <ProductTile active/>
            <ProductTile active/>
            <ProductTile active promo/>
            <ProductTile active/>
            <ProductTile/>
            <ProductTile active promo/>
        </Wrapper>
    )
}

export default ProductsList
