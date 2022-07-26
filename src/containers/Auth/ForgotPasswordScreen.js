import React from 'react';
import {SafeAreaView, TextInput, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';

import {forgotPasswrod} from '../../redux/actions/authActions';

const ForgotPasswordScreen = ({navigation, ...props}) => {
  const [username, setUsername] = React.useState('');

  const onSignIn = () => {
    navigation.pop();
  };

  const onSubmit = () => {
    const data = {username: username};
    props.forgotPasswrod(data).then(resolve, reject);
  };

  function resolve(value) {
    console.log('Your password sent to your email');
  }

  function reject(value) {
    Toast.show({
      type: 'error',
      text1: 'Invalid username',
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
          placeholder="EmailAddress"
          value={username}
          onChangeText={setUsername}
        />
        <Button onPress={onSubmit} title="Submit" color="#841584" />
        <Button onPress={onSignIn} title="Signin" color="#841584" />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  forgotPasswrod: data =>
    new Promise((resolve, reject) => {
      dispatch(forgotPasswrod(data, resolve, reject));
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordScreen);
