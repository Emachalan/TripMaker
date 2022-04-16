import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {usePeopleSetup} from './hooks';
const {width, height} = Dimensions.get('window');
const MakeTrip = ({navigation}) => {
  const [searchText, setSearchText] = useState(null);
  const {searchPeopleSetup, searchedPeoples, sendMakeTripNotification} = usePeopleSetup();
  const onSearchPress = () => {
    searchPeopleSetup({params: {name: searchText}, endpoint: 'users/search'});
  };

  const onPersonPress = id => {
    sendMakeTripNotification({
      body: {user_id: id},
      endpoint: 'notifications/send-notifications',
    });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => onPersonPress(item.id)}>
      <View style={{marginLeft: 20}}>
        <Image source={{uri: item.photo}} style={{height: 30, width: 30}} />
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderEmpty = () => (
    <View style={{margin: 20}}>
      <Text style={{fontSize: 18, color: '#000'}}>No Person's found</Text>
    </View>
  );

  return (
    <View>
      <Text>MakeTrip</Text>
      <Text style={{color: 'orange', fontSize: 18, padding: 5, marginLeft: 10}}>
        {' '}
        Add Peoples
      </Text>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <TextInput
          style={styles.input}
          onChangeText={data => setSearchText(data)}
          value={searchText}
        />
        <TouchableOpacity
          style={{alignSelf: 'center', position: 'absolute', right: 25}}
          onPress={() => onSearchPress()}>
          <MaterialCommunityIcons
            name="account-search"
            color={'orange'}
            size={28}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={searchedPeoples}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={renderEmpty}
        />
      </View>
    </View>
  );
};

export default MakeTrip;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: width - 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    color: 'orange',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 60,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  title: {
    fontSize: 18,
  },
});
