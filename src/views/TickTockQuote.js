import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import moment from 'moment';

import Clock from '../components/Clock';
import Quote from '../components/Quote';
import Author from '../components/Author';

import quotesJson from '../quotes.json';

import themeShape from '../shapes';

class TickTockQuote extends Component {

  static hasMinuteStarted(date) {
    return (date.format('ss') === '00');
  }

  static readQuoteForCurrentTime(date) {
    const index = date.format('H:mm');

    const quotesForCurrentTime = quotesJson[index];
    // Sadly not all hours have a quote, in case it's undefined we refer to a default one
    if (quotesForCurrentTime === undefined) {
      return [`It's ${index}`, `How did it get so late so soon? (It's ${index})`, 'Poem', 'Dr. Seuss'];
    }
    // We get a random quote for that specific time
    // Note: most times have a single quote in them
    return quotesForCurrentTime[Math.floor(Math.random() * quotesForCurrentTime.length)];
  }

  state = {
    quoteArray: ['', '', '', ''],
  };

  componentDidMount() {
    this.tickTimer = setInterval(() => {
      const date = moment();
      if (TickTockQuote.hasMinuteStarted(date)) {
        this.setState({ quoteArray: TickTockQuote.readQuoteForCurrentTime(date) });
      }
    }, 1000);
    this.setState({ quoteArray: TickTockQuote.readQuoteForCurrentTime(moment()) });
  }

  componentWillUnmount() {
    if (this.tickTimer) {
      clearInterval(this.tickTimer);
    }
  }

  render() {
    const { quoteArray } = this.state;
    const { theme } = this.props;
    const [highlight, quote, publication, author] = quoteArray;

    return (
      <View style={{ ...{ flex: 1, backgroundColor: theme.color.primary } }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          rightComponent={<Clock theme={theme} />}
          outerContainerStyles={{ backgroundColor: theme.color.secondary }}
          innerContainerStyles={{ justifyContent: 'space-around' }}
        />
        <Quote highlight={highlight} theme={theme}>
          {quote}
        </Quote>
        <Author author={author} publication={publication} theme={theme} />
      </View>
    );
  }
}

TickTockQuote.propTypes = {
  theme: themeShape.isRequired,
};

export default TickTockQuote;
