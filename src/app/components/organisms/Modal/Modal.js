import React, { useEffect } from 'react';
import { Wrapper, StyledModal, Photo, Bottom, BlackMask } from './Modal.styles';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CloseButton from 'app/components/atoms/CloseButton/CloseButton';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, product }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  console.log(product)
  return ReactDOM.createPortal(
    <Wrapper>
      <StyledModal>
        <Photo style={product.image ? { backgroundImage: `url(${product.image})` } : ''}>{/* //TODO
 */}          <CloseButton onClick={handleClose}/>
        </Photo>
        <Bottom>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </Bottom>
      </StyledModal>
      <BlackMask onClick={handleClose}/>
    </Wrapper>,
    modalNode
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  product: PropTypes.element, //TODO
};

export default Modal;
