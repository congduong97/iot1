import React from 'react';
import {AppIcon} from '../elements';
import {TouchableOpacity} from 'react-native';

const AppIconButton = props => {
  const {onPress, icon, style, hitSlop} = props;
  const {iconName, iconColor, iconSize, iconType} = icon;
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={hitSlop}
      style={[
        {
          // padding: SIZE.padding / 2,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        },
        style,
      ]}>
      <AppIcon
        type={iconType}
        icon={iconName}
        iconColor={iconColor}
        iconSize={iconSize}
      />
    </TouchableOpacity>
  );
};

export {AppIconButton};
