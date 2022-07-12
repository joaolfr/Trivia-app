import PropTypes from 'prop-types';
import React from 'react';
import {
    ButtonWrapper, Wrapper, ButtonText
} from './styles'

const Button = ({title, onPress, style}) => {

    return(
        <Wrapper>
            <ButtonWrapper onPress={onPress}>
                <ButtonText>{title}</ButtonText>
            </ButtonWrapper>
        </Wrapper>
    )
};


Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object
    
  };
  
  Button.defaultProps = {
    title: 'Next',
    onPress: () => {},
    style:{ }
   
  };

export default Button;