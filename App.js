import React, { useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './src/navigators/BottomTabs';
import { AuthStackNavigator } from './src/navigators/AuthNavigator';

const RootStack = createStackNavigator();

const App = () => {
	const [ isLogin, setIsLogin ] = useState(false);

	const renderScreen = () => {
		return isLogin ? (
			<RootStack.Screen name={'MainStack'} component={MainNavigator} />
		) : (
			<RootStack.Screen
				name={'AuthStack'}
				component={AuthStackNavigator}
				setIsLogin={setIsLogin}
			/>
		);
	};

	return (
		<NavigationContainer>
			<RootStack.Navigator
				screenOptions={{
					headerShown: false,
					animationEnabled: false
				}}
			>
				{renderScreen()}
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default App;
