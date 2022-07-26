import React from 'react';
import {SafeAreaView, TextInput, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';

import {login} from '../../redux/actions/authActions';

const SignInScreen = ({navigation, ...props}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const onLogin = () => {
    const data = {username: username, password: password};
    props.login(data).then(resolve, reject);
  };

  function resolve(value) {
    console.log('You are successfully logged in');
  }

  function reject(value) {
    Toast.show({
      type: 'error',
      text1: 'Invalid username or password',
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
        <Text style={{marginLeft: 5}}>Email Address</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 5,
            borderColor: '#007AFF',
            borderRadius: 6,
          }}
          placeholder="Email Address"
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
        <Button onPress={onLogin} title="Login" color="#841584" />
        <Button
          onPress={onForgotPassword}
          title="ForgotPassword"
          color="#841584"
        />
        <Button onPress={onSignUp} title="Signup" color="#841584" />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: data =>
    new Promise((resolve, reject) => {
      dispatch(login(data, resolve, reject));
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
