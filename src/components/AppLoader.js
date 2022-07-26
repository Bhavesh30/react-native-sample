import React from 'react';
import {View, Text} from 'react-native';

function AppLoader() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
        Loading...
      </Text>
    </View>
  );
}

export default AppLoader;
