import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';

import TouchableItem from '../components/TouchableItem';
import StyledText from '../components/StyledText';
import Themes from '../modules/Themes';

const DrawerContent = (props) => {
  const { items, onItemPress } = props;
  return (
    <View style={{ flex: 1, backgroundColor: '#43484d' }}>
      <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
        <StyledText color="#FFF" fontSize={20}>
          Tick Tock Quotes
        </StyledText>
      </View>
      <View style={{ marginLeft: scale(10), marginTop: scale(20) }}>
        {items.map((route) => {
          const { key, routeName } = route;
          const focused = false;
          // The following line is a bit hacky, as a matter of fact this whole map is hacky
          const themeName = key.toLowerCase();
          return (
            <TouchableItem
              key={key}
              onPress={() => { onItemPress({ route, focused }); }}
              delayPressIn={0}
              style={{ marginTop: scale(10), padding: scale(10) }}
            >
              <StyledText
                color={Themes[themeName].color.primary}
                fontSize={20}
              >
                {routeName}
              </StyledText>
            </TouchableItem>);
        })}
      </View>
    </View>
  );
};

DrawerContent.propTypes = {
  // These items come from react-navigation-drawer which does not have propTypes
  // eslint-disable-next-line
  items: PropTypes.any.isRequired,
  onItemPress: PropTypes.func.isRequired,
};

export default DrawerContent;
