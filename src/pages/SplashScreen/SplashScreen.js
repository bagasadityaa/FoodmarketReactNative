import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {getData} from '../../utils/utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        console.log('token: ', res);
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('Signin');
        }
      });
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#7A4141',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 302, height: 154}}
        source={require('../image/Logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
