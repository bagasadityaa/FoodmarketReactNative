import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {Button, Header, TextInput} from '../../components/Components';
import {showMessage, useForm} from '../../utils/utils';

const Signup = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log('form: ', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SigninAddress');
  };

  const addPhoto = () => {
    launchImageLibrary({}, response => {
      console.log('Response = ', response);

      if (response.didCancel || response.error) {
        showMessage('Anda belum memilih photo');
      } else {
        const source = {uri: response.uri};
        const dataImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        setPhoto(source);
        showMessage('Anda Sudah memilih photo', 'success');
        dispatch({type: 'SET_PHOTO', value: dataImage});
        dispatch({type: 'SET_UPLOAD_STATUS', value: true});
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Sign Up"
          subTitle="Register and eat"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Full Name"
            placeholder="Type your Full Name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <View style={{height: 16}} />
          <TextInput
            label="Email Address"
            placeholder="Type your Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <View style={{height: 16}} />
          <TextInput
            label="Password"
            placeholder="Type your Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />

          <View style={{height: 24}} />
          <Button text="Continue" onPress={onSubmit} />
          <View style={{height: 12}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingBottom: 24,
    marginTop: 24,
    flex: 1,
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 26,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
