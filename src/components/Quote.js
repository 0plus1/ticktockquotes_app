import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import StyledText from './StyledText';

import themeShape from '../shapes';

const QuoteStyle = {
  height: '80%',
  width: 'auto',
  margin: '5%',
};

const Quote = ({ theme, children, highlight }) => {
  const quoteChunks = children.split(highlight);
  return (
    <ScrollView style={QuoteStyle}>
      <StyledText color={theme.color.secondary} fontSize={25}>
        {quoteChunks[0]}
        <StyledText color={theme.color.highlight} fontSize={30}>
          {highlight}
        </StyledText>
        {quoteChunks[1]}
      </StyledText>
    </ScrollView>
  );
};

Quote.propTypes = {
  theme: themeShape.isRequired,
  children: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
};

export default Quote;
