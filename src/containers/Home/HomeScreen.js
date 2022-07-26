import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

const HomeScreen = ({navigation, ...props}) => {
  React.useEffect(() => {}, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCCCCC',
      }}>
      <Text>Home</Text>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
