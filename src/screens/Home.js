import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Banner from '../components/Banner';
import Music from '../components/Music';
import Artis from '../components/Artis';

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>DumbPlay</Text>
			<ScrollView>
				<Banner navigation={navigation} />
				<Artis navigation={navigation} />
				<Text style={[ styles.titleSongs, { marginTop: 12 } ]}>Songs</Text>
				<Music navigation={navigation} />
			</ScrollView>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1f1d1d'
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#EE4622',
		margin: 10,
		marginLeft: 15,
		textAlign: 'center'
	},
	titleSongs: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#EE4622',
		margin: 10,
		marginLeft: 15
	}
});
