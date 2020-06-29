import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {handleFakeLogin} from '../redux/actions/auth';

const Login = ({navigation}) => {
  const auth = useSelector((state) => state.auth);

  const {error, loading} = auth;

  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('fadhildarma13@gmail.com');
  const [password, setPassword] = React.useState('kelas2tkj');

  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/logoplay.png')}
        style={{marginBottom: 5, width: 300, resizeMode: 'stretch'}}
      />

      {loading || error === null ? (
        <Text></Text>
      ) : (
        error && <Text style={{color: 'white'}}>{error}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholderTextColor={'darkgray'}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'darkgray'}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.containerBtnLogin}
        onPress={() => dispatch(handleFakeLogin(email, password))}>
        <Text style={styles.textBtnLogin}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerRegister}
        onPress={() => {
          navigation.navigate('Registration');
        }}>
        <Text style={[styles.textRegister]}>
          Don't Have Account? Register Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 120,
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  input: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 10,
    borderRadius: 8,
    color: 'black',
    marginVertical: 8,
    fontSize: 16,
  },
  containerBtnLogin: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#EE4622',
  },
  textBtnLogin: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  containerRegister: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textRegister: {
    fontWeight: '500',
    fontSize: 14,
    color: '#fff',
  },
});

export default Login;
