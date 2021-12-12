import React from 'react'
import { Wrapper, Photo, Promo, Bottom } from './ProductTile.styles'
import { product1 } from 'data/product1'

const ProductTile = () => {
    return (
        <Wrapper>
            <Photo>
                <Promo />
            </Photo>
            <Bottom>
                <h3>{product1.name}</h3>
                <span>{product1.description}</span>
            </Bottom>
            
        </Wrapper>
    )
}

export default ProductTile
