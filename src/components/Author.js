import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import StyledText from './StyledText';
import themeShape from '../shapes';

const authorStyle = {
  marginBottom: 10,
  marginLeft: '5%',
  marginRight: '5%',
};

const Author = ({ theme, author, publication }) => (
  <View style={authorStyle}>
    <StyledText style={{ textAlign: 'right' }} color={theme.color.author} fontSize={15}>
      ―
      {' '}
      {author}
      {' '}
      in
      {' '}
      {publication}
    </StyledText>
  </View>
);


Author.propTypes = {
  theme: themeShape.isRequired,
  author: PropTypes.string.isRequired,
  publication: PropTypes.string.isRequired,
};

export default Author;
