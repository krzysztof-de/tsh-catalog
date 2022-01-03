import React, { useEffect } from 'react';
import { Wrapper, StyledModal, Photo, Bottom, BlackMask } from './Modal.styles';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CloseButton from 'app/components/atoms/CloseButton/CloseButton';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <Wrapper>
      <StyledModal>
        <Photo>
          <CloseButton onClick={handleClose}/>
        </Photo>
        <Bottom>
          <h2>Nike running shoes</h2>
          <p>Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt</p>
        </Bottom>
      </StyledModal>
      <BlackMask />
    </Wrapper>,
    modalNode
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
