import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../components/button';

//Welcome Screen
const WelcomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Image
          source={require('../assets/little-lemon-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.titleText}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>

      <Button
        onPress={() => {
          navigation.navigate('Subscribe');
        }}
        text="Newsletter"
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  containerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#333333",
    marginTop: 48,
    paddingVertical: 10,
    textAlign: 'center',
  }
});
