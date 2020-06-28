import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const Register = ({ navigation }) => {
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');

	return (
		<View style={styles.container}>
			<Text
				style={{
					color: '#EE4622',
					fontSize: 25,
					fontWeight: 'bold',
					marginBottom: 7
				}}
			>
				Register
			</Text>
			<TextInput
				style={[ styles.input ]}
				placeholderTextColor={'darkgray'}
				placeholder={'Name'}
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>

			<TextInput
				style={[ styles.input ]}
				placeholderTextColor={'darkgray'}
				placeholder={'Email'}
				keyboardType={'email-address'}
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				style={[ styles.input ]}
				placeholderTextColor={'darkgray'}
				placeholder={'Password'}
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<TextInput
				style={[ styles.input ]}
				placeholderTextColor={'darkgray'}
				placeholder={'Gender'}
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<TextInput
				style={[ styles.input ]}
				placeholderTextColor={'darkgray'}
				placeholder={'Phone'}
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<TextInput
				style={[ styles.input ]}
				placeholderTextColor={'darkgray'}
				placeholder={'Address'}
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<TouchableOpacity
				style={[ styles.containerBtnLogin ]}
				onPress={() => {
					navigation.navigate('Login');
				}}
			>
				<Text style={styles.textBtnLogin}>Sign Up</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 70,
		alignItems: 'center',
		backgroundColor: '#141414'
	},
	input: {
		backgroundColor: '#e8e8e8',
		width: '100%',
		padding: 10,
		borderRadius: 8,
		color: 'black',
		marginVertical: 8
	},
	containerBtnLogin: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 9,
		padding: 15,
		borderRadius: 8,
		backgroundColor: '#EE4622'
	},
	textBtnLogin: {
		color: 'white',
		fontWeight: '500',
		fontSize: 16
	}
});

export default Register;
