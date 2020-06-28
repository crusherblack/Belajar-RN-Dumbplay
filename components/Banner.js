import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	FlatList,
	ImageBackground,
	Dimensions,
	TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Banner = ({ navigation }) => {
	console.disableYellowBox = true;
	let banners = [
		{
			title: 'Metal City',
			subTitle: 'Dead April',
			img: require('../Assets/music.png'),
			duration: 201.6
		},
		{
			title: 'Return To Forever',
			subTitle: '',
			img: require('../Assets/b2.jpg'),
			duration: 201.6
		},
		{
			title: 'Your Love Remains',
			subTitle: 'The Rock Music',
			img: require('../Assets/b4.jpg'),
			duration: 201.6
		}
	];

	const playSong = (item) => {
		navigation.navigate('Settings', { item: item });
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={banners}
				horizontal={true}
				pagingEnabled={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item, index }) => {
					return (
						<View style={styles.banner} key={index}>
							<ImageBackground source={item.img} style={styles.bannerImage}>
								<Text style={styles.textAtas}>Connect On DumbPlay</Text>
								<Text style={styles.textBawah}>
									Discover, Stream, and share a constantly expanding mix
									of music
								</Text>
								<Text style={styles.textBawah}>
									From emerging and major artist aroudn the world
								</Text>
							</ImageBackground>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default Banner;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		height: 250,
		backgroundColor: '#fff',
		elevation: 15
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#000',
		margin: 10,
		marginLeft: 15
	},
	banner: {
		height: 230,
		width: width
	},
	bannerImage: {
		height: 250,
		width: '100%',
		alignItems: 'stretch',
		justifyContent: 'center'
	},

	textAtas: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
		marginBottom: 7
	},
	textBawah: {
		fontSize: 12,
		color: 'white',
		textAlign: 'center'
	}
});
