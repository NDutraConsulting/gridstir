import React, { useState } from 'react';
import { Text, SafeAreaView, SectionList } from 'react-native';
import { useChargerLocationsModel } from '../../../../models/charger-locations/UseChargerLocations.hook';
import { listStyles } from '../../../../../brand/styles/style';
import { Routes } from '../../../_shared/Routes/Routes';
import { Item } from './Item.component';

const ChargerLocationsFlatList = ({ navigation }: { navigation: any }) => {
  const [chargerLocationsData] = useChargerLocationsModel();
  const [selectedId, setSelectedId] = useState(null);

  console.log(chargerLocationsData);

  const listData = [{ title: 'Charger Stations', data: chargerLocationsData }];

  const renderItem = (item: any) => {
    console.log(item);

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
      <SectionList
        sections={listData}
        renderItem={({ item }) => renderItem(item)}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={listStyles.header}>{title}</Text>
        )}
        keyExtractor={item => item.UUID}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default ChargerLocationsFlatList;
