import * as React from 'react';

import { StyleSheet, View, Text, Alert } from 'react-native';
import { MyButton } from 'login-module';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();

  // React.useEffect(() => {
  //   // multiply(300, 70).then(setResult);
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Result: {result}</Text> */}
      <MyButton
        label={'CLIQUE-ME'}
        onPress={() => Alert.alert('Ola', 'Estou alertando sobre algo')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
