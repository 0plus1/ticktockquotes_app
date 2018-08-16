import React from 'react';
import TickTockQuote from '../views/TickTockQuote';
import Themes from '../modules/Themes';

export const London = () => (
  <TickTockQuote theme={Themes.london} />
);

export const Smoke = () => (
  <TickTockQuote theme={Themes.smoke} />
);

export const Sunset = () => (
  <TickTockQuote theme={Themes.sunset} />
);
