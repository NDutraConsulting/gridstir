import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useChargerLocationsModel } from '../../../../models/charger-locations/UseChargerLocations.hook';
import { listStyles } from '../../../../styles/style';
import { Routes } from '../../../_shared/Routes/Routes';
import { Item } from './Item.component';

const ChargerLocationsFlatList = ({ navigation }) => {
  const [chargerLocationsData] = useChargerLocationsModel();
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.UUID === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.UUID === selectedId ? 'white' : 'black';

    //  Single responsibility at this component layer - is easier to debug and manage
    const onPress = () => {
      setSelectedId(item.UUID);

      setTimeout(() => {
        navigation.push(`${Routes.ChargerStation}`, { station: item });
      }, 300);
    };

    return (
      <Item
        item={item}
        onPress={onPress}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        styles={listStyles}
      />
    );
  };

  return (
    <SafeAreaView style={listStyles.container}>
      <FlatList
        data={chargerLocationsData}
        renderItem={renderItem}
        keyExtractor={item => item.UUID}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default ChargerLocationsFlatList;
