import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';

const StyledText = ({ children, color, fontSize }) => {
  const TextStyle = {
    fontFamily: 'FontInconsolata',
    color,
    fontSize: scale(fontSize),
  };

  return (
    <Text style={TextStyle}>
      {children}
    </Text>
  );
};

StyledText.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};

export default StyledText;
