import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const Main = props => {
  const {navigation} = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Sube')}>
      <Text>Main</Text>
    </TouchableOpacity>
  );
};

export default Main;
