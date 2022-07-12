import PropTypes from 'prop-types';
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
