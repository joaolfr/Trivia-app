import PropTypes from 'prop-types';
import {Platform} from 'react-native';

import styled from 'styled-components';
import metrics from '../../../utils/metrics';

const TextStyled = styled.Text`
  font-size: ${(props) => {
    switch (props.type) {
      case 'large':
        return metrics.hp(24);
      case 'big':
        return metrics.hp(20);
      case 'max':
        return metrics.hp(16);
      case 'medium':
        return metrics.hp(14);
      case 'small':
        return metrics.hp(12);
      case 'tiny':
        return metrics.hp(10);
      default:
        return metrics.hp(14);
    }
  }}px;
  ${(props) => props.uppercase && 'text-transform: uppercase'};
  ${(props) => props.letterSpace && 'letter-spacing: 1px;'};
  color: ${(props) => props.color || '#1F253C'};
  /* ${(props) => {
    const classStyle = Platform.OS === 'ios' ? 'font-weight: ' : 'font-family';
    let type = '';
    switch (props.weight) {
      case 'bold':
        type = Platform.OS === 'ios' ? 'bold' : 'Futura-Heavy';
        break;
      case 'heavy':
        type = Platform.OS === 'ios' ? 700 : 'Futura-Heavy';
        break;
      case 'medium':
        type = Platform.OS === 'ios' ? 600 : 'Futura-Book';
        break;
      case 'book':
        type = Platform.OS === 'ios' ? 500 : 'Futura-Book';
        break;
      case 'light':
        type = Platform.OS === 'ios' ? 400 : 'Futura-Light';
        break;
      case 'tiny':
        type = Platform.OS === 'ios' ? 300 : 'Futura-Book';
        break;
      case 'semi':
        type = Platform.OS === 'ios' ? 600 : 'Futura-Book';
        break;
      default:
        type = Platform.OS === 'ios' ? 500 : 'Futura-Book';
        break;
    }
    return `${classStyle} ${type}`;
  }}; */
  
`;

TextStyled.propTypes = {
  type: PropTypes.string,
  weight: PropTypes.string || PropTypes.number,
  uppercase: PropTypes.bool,
  color: PropTypes.string,
  letterSpace: PropTypes.number,
};

TextStyled.defaultProps = {
  type: '',
  children: '',
  weight: 'normal',
  uppercase: false,
};

export default TextStyled;
