import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {validateEmail} from '../utils';
import {useWindowDimensions} from 'react-native';
import Button from '../components/button';

//Subscribe Screen
const SubscribeScreen = () => {

  const [email, setEmail] = useState('');
  const isEmailValid = validateEmail(email);
  const {width, height, fontScale} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        style={styles.logo}
      />
      <Text style={styles.titleText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        placeholder="Type your email"
        style={styles.inputText}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button
        onPress={() => {
          Alert.alert('Thanks for subscribing, stay tuned!');
          setEmail('');
        }}
        text="Subscribe"
        disabled={!isEmailValid}
      />
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputText: {
    marginVertical: 24,
    paddingHorizontal: 10,
    borderColor: "black",
    fontSize: 16,
    borderWidth: 1,
    alignSelf: 'stretch',
    borderRadius: 10,
  },
 });
