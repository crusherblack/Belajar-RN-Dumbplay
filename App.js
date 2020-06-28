import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './src/components/BottomTabs';

const App = () => {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
};

export default App;
