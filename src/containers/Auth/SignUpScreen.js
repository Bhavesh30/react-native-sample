import React from 'react';
import {SafeAreaView, TextInput, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';

import {register} from '../../redux/actions/authActions';

const SignUpScreen = ({navigation, ...props}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignIn = () => {
    navigation.pop();
  };

  const onRegister = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    };
    props.register(data).then(resolve, reject);
  };

  function resolve(value) {
    console.log('You are successfully registerd ');
  }

  function reject(value) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong please try again',
    });
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#CCCCCC'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 10,
        }}>
        <Text style={{marginLeft: 5}}>FirstName</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 5,
            borderColor: '#007AFF',
            borderRadius: 6,
          }}
          placeholder="FirstName"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={{marginLeft: 5}}>LastName'</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 5,
            borderColor: '#007AFF',
            borderRadius: 6,
          }}
          placeholder="LastName"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={{marginLeft: 5}}>Email Address</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 5,
            borderColor: '#007AFF',
            borderRadius: 6,
          }}
          placeholder="EmailAddress"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={{marginLeft: 5, marginTop: 10}}>Password</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 5,
            borderColor: '#007AFF',
            borderRadius: 6,
          }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button onPress={onRegister} title="Register" color="#841584" />
        <Button onPress={onSignIn} title="Signin" color="#841584" />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  register: data =>
    new Promise((resolve, reject) => {
      dispatch(register(data, resolve, reject));
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
