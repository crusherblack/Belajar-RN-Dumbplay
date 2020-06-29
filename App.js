import React, { useState } from 'react';
import { Text, MaskedViewIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './src/navigators/BottomTabs';
import { AuthStackNavigator } from './src/navigators/AuthNavigator';

import { useSelector } from 'react-redux';

const RootStack = createStackNavigator();

const App = () => {
	const auth = useSelector((state) => state.auth);
	const { isAuthenticated, loading } = auth;

	return (
		<NavigationContainer>
			<RootStack.Navigator
				screenOptions={{
					headerShown: false,
					animationEnabled: false
				}}
			>
				{isAuthenticated ? (
					<RootStack.Screen name={'MainStack'} component={MainNavigator} />
				) : (
					<RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
				)}
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default App;
