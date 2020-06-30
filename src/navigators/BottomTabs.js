import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Validasi from '../screens/Validasi';
import Profile from '../screens/Profile';
import Detail from '../screens/Detail';

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
				name="Validasi"
				component={Validasi}
				options={{
					tabBarLabel: 'Validasi',
					tabBarIcon: () => <Icon name="ios-create" color="#EE4622" size={24} />
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
				name="Detail"
				component={Detail}
				options={{
					tabBarLabel: 'Detail',
					tabBarIcon: () => <Icon name="ios-paper" color="#EE4622" size={24} />
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
