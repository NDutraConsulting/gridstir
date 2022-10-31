import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const Item = ({ item, onPress, backgroundColor, textColor, styles }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>
      {item.AddressInfo.AddressLine1}
    </Text>
    <Text style={[styles.title, textColor]}>
      {`${item.AddressInfo.Town}, ${item.AddressInfo.StateOrProvince}`}
    </Text>
  </TouchableOpacity>
);
