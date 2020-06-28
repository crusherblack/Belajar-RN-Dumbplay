import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './components/BottomTabs';

const App = () => {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
};

export default App;
