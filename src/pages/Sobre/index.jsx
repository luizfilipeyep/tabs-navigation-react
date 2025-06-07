import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function Sobre() {
  const navigation = useNavigation()

  return ( 
    <View style={styles.container}>
      <Text>Página Sobre</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Sobre;