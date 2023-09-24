// export function multiply(a: number, b: number): Promise<number> {
//   return Promise.resolve(a * b);
// }

import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';

type IProps = {
  icon?: string;
  onPress: () => void;
  label: string;
};

export function MyButton({ onPress, label, icon }: IProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 250,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
