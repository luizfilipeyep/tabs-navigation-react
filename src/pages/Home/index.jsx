import { Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation()

  const navegaSobre = () => {
    navigation.navigate("Sobre")
  }

  return ( 
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <Button title="Sobre" onPress={navegaSobre}/>
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

export default Home;