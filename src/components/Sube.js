import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const Sube = props => {
  const {navigation} = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
      <Text>Sube</Text>
    </TouchableOpacity>
  );
};

export default Sube;
