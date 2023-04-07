import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  });
  const onCount = type => {
    if (type === 'plus') {
      result = value + 1;
      // setValue(value + 1);
    }
    if (type === 'minus') {
      if (value > 1) {
        // setValue(value - 1);
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <Image
          style={styles.minus}
          source={require('../image/buttonMinus.png')}
        />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
        <Image
          style={styles.plus}
          source={require('../image/buttonPlus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
  minus: {
    height: 50,
    width: 50,
  },
  plus: {
    height: 50,
    width: 50,
  },
});
