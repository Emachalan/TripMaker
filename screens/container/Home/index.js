import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import {useProfileSetup} from '../Login/hooks';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  const {profileData, createNotifSetup} = useProfileSetup();
  const checkPermission = async () => {
    const enabled = await messaging().hasPermission();
    if (enabled) {
      getFcmToken();
    } else {
      requestPermission();
    }
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('fcmToken', fcmToken);
      createNotifSetup({
        body: {user_id: profileData?.id, token: fcmToken},
        endpoint: 'notifications',
      });
    } else {
      console.log('Failed', 'No token received');
    }
  };

  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
      // User has authorised
    } catch (error) {
      // User has rejected permissions
    }
  };
  useEffect(() => {
    checkPermission();
  }, [profileData]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 12, color: 'black'}}>{profileData?.name}</Text>
      <View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate('MakeTrip')}>
          <Text style={{fontSize: 14, color: 'black'}}>Make Trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
  },
  btnContainer: {
    backgroundColor: 'red',
    width: width / 2,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
