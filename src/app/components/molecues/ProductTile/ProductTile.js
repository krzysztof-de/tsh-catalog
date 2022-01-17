import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProductShape } from 'types';
import { Wrapper, Photo, Bottom, StyledControls, StyledDesc } from './ProductTile.styles';
import Button from 'app/components/atoms/Button/Button';
import Rating from 'app/components/atoms/Rating/Rating';
import useModal from 'app/components/organisms/Modal/useModal';
import { useProducts } from 'hooks/useProducts';


const ProductTile = ({ itemData: { id, name = 'Product title', description = 'Product description', rating, promo, active, image }, ...props }) => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentProduct, setCurrentProduct] = useState(null);
  const { getProductById } = useProducts();

  const handleOpenDetails = async (id) => {
    const product = await getProductById(id);
    setCurrentProduct(product);
    handleOpenModal();
  };

  return (
    <Wrapper {...props}>
      <Photo style={{ backgroundImage: `url(${image})` }} className={`${active ? 'active' : ''} ${promo ? 'promo' : ''}`} />
      <Bottom className='dupa'>
        <StyledDesc>
          <h3>{name}</h3>
          <p>{description}</p>
        </StyledDesc>
        <StyledControls>
          <Rating rating={rating} />
          <Button label="Show details" isFullWidth disabled={!active} onClick={() => handleOpenDetails(id)} />
        </StyledControls>
      </Bottom>
      {isOpen ? <Modal handleClose={handleCloseModal} product={currentProduct} /> : null}
    </Wrapper>
  );
};

ProductTile.propTypes = {
  itemData: PropTypes.shape(ProductShape),
};

export default ProductTile;
