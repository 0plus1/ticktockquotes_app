import React, { Component } from 'react';
import { DangerZone } from 'expo';
import moment from 'moment';

import themeShape from '../shapes';
import StyledText from './StyledText';

const { Localization } = DangerZone;

class Clock extends Component {
  state = {
    date: moment(),
    timeZoneString: '',
  };

  async componentDidMount() {
    const timeZoneString = await Localization.getCurrentTimeZoneAsync();
    this.setState(() => ({ timeZoneString }));
    this.tickTimer = setInterval(() => {
      this.setState({ date: moment() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.tickTimer) {
      clearInterval(this.tickTimer);
    }
  }

  render() {
    const { date, timeZoneString } = this.state;
    const { theme } = this.props;
    const timeString = date.format('H:mm:ss');
    return (
      <StyledText color={theme.color.primary} fontSize={15}>
        It&apos;s
        {' '}
        {timeString}
        {' '}
        (
        {timeZoneString}
        )
      </StyledText>
    );
  }
}

Clock.propTypes = {
  theme: themeShape.isRequired,
};

export default Clock;
