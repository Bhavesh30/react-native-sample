import React from 'react';
import {Text, View, Button} from 'react-native';

import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';

import {logout} from '../../redux/actions/authActions';

const ProfileScreen = ({navigation, ...props}) => {
  React.useEffect(() => {}, []);

  const onLogout = () => {
    const data = {};
    props.logout(data).then(resolve, reject);
  };

  function resolve(value) {
    console.log('You are successfully logged out');
  }

  function reject(value) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong please try again',
    });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCCCCC',
      }}>
      <Text>Profile</Text>
      <Button onPress={onLogout} title="Logout" color="#841584" />
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: data =>
    new Promise((resolve, reject) => {
      dispatch(logout(data, resolve, reject));
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
