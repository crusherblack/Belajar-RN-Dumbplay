import React, { useEffect } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('LoginStack');
		}, 2000);
	}, []);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#141414'
			}}
		>
			<Image
				source={require('../Assets/logoplay.png')}
				style={{ marginBottom: 5, width: 300, resizeMode: 'stretch' }}
			/>
		</View>
	);
};

export default SplashScreen;
