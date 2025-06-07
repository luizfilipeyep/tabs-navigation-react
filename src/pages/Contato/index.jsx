import { Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function Contato() {
  const navigation = useNavigation()

  return ( 
    <View style={styles.container}>
      <Text>Página de contato do site.</Text>
      <Button title="Voltar para Home" onPress={() => {navigation.navigate("Home")}} />
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

export default Contato;