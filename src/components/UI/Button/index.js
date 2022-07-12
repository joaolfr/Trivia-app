import PropTypes from 'prop-types';
import React from 'react';
import {
    ButtonWrapper, Wrapper, ButtonText
} from './styles'

const Button = ({title, onPress}) => {

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
    onPress: PropTypes.func
    
  };
  
  Button.defaultProps = {
    title: 'Next',
    onPress: () => {}
   
  };

export default Button;