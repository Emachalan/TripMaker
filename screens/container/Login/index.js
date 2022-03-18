import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {webClientID} from './config';
import {useProfileSetup} from './hooks';
const PROFILE_IMAGE_SIZE = 150;

const Login = ({navigation}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {isLoading, profileData, isError, createAccountSetup} = useProfileSetup();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: webClientID,
      offlineAccess: false,
      profileImageSize: PROFILE_IMAGE_SIZE,
    });
  }, []);

  console.log("profileData////",profileData)

  useEffect(() => {
    if (profileData?.id) {
      navigation.navigate('Home');
    }
  },[profileData])

  const onLoginPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo////",userInfo)
      createAccountSetup({body: userInfo?.user, endpoint: 'users'});
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onLoginPress}
        disabled={isDisabled}
      />
    </View>
  );
};

export default Login;
