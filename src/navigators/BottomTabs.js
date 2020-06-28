import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Profile from '../screens/Profile';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			tabBarOptions={{
				inactiveBackgroundColor: '#141414',
				activeBackgroundColor: '#141414',
				activeTintColor: '#EE4622',
				inactiveTintColor: '#EE4622',
				style: {
					borderTopWidth: 1,
					borderTopColor: '#141414'
				}
			}}
		>
			<Tab.Screen
				name="Settings"
				component={Setting}
				options={{
					tabBarLabel: 'Setting',
					tabBarIcon: () => (
						<Icon name="ios-settings" color="#EE4622" size={24} />
					)
				}}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: () => <Icon name="ios-home" color="#EE4622" size={24} />
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: () => (
						<Icon name="ios-contact" color="#EE4622" size={24} />
					)
				}}
			/>
		</Tab.Navigator>
	);
}
