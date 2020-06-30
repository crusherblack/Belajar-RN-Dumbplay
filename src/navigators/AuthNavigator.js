import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import SplashScreen from '../screens/SplashScreen';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export function AuthStackNavigator() {
	return (
		<AuthStack.Navigator
			mode={'modal'}
			screenOptions={{
				headerShown: false
			}}
			initialRouteName="Splash"
		>
			<AuthStack.Screen name={'Splash'} component={SplashScreen} />
			<AuthStack.Screen name={'LoginStack'}>
				{() => (
					<LoginStack.Navigator
						mode={'card'}
						screenOptions={{
							headerShown: false
						}}
					>
						<LoginStack.Screen name={'Login'} component={Login} />
					</LoginStack.Navigator>
				)}
			</AuthStack.Screen>
			<AuthStack.Screen name={'Registration'} component={Register} />
		</AuthStack.Navigator>
	);
}
