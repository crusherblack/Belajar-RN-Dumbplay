import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';

const Detail = () => {
	const recipes = [
		{
			name: 'Pad Thai',
			info: '45min | 2 servings',
			image: require('../Assets/gitar1.png')
		},
		{
			name: 'Pad Thai',
			info: '45min | 2 servings',
			image: require('../Assets/gitar1.png')
		},
		{
			name: 'Pad Thai',
			info: '45min | 2 servings',
			image: require('../Assets/gitar1.png')
		}
	];

	return (
		<Container>
			<StatusBar barStyle="light-content" />
			<TopBackround source={require('../Assets/topimage.png')}>
				<SafeAreaView>
					<MenuBar>
						<Back>
							<Icon name="arrowleft" size={24} color="#fff" />
							<Text style={{ marginLeft: 10 }}>Ingredients</Text>
						</Back>
						<Icon name="heart" size={24} color="#fff" />
					</MenuBar>
					<MainRecipe>
						<Text title heavy>
							Spicy Shrimp
						</Text>
						<Devider />
						<Text bold>80 Calories per 100g</Text>
						<Text>3g fat | 10g protein | 8g carbs</Text>
					</MainRecipe>
					<Button>
						<Text bold small>
							LEARN MORE
						</Text>
					</Button>
				</SafeAreaView>
			</TopBackround>
			<RecipesContainer>
				<Text dark heavy large>
					Recipes
				</Text>
				<Text dark small>
					15 recipes available
				</Text>
				<Recipes>
					{recipes.map((recipe, index) => (
						<Recipe key={index}>
							<RecipeImage source={recipe.image} />
							<RecipeInfo>
								<Text dark bold>
									{recipe.name}
								</Text>
								<Text dark small>
									{recipe.info}
								</Text>
							</RecipeInfo>
							<Icon name="hearto" size={18} color="#000" />
						</Recipe>
					))}
				</Recipes>
			</RecipesContainer>
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	background-color: #fff;
`;

const Text = styled.Text`
	color: ${(props) => (props.dark ? '#000' : '#fff')};
	font-family: "AvenirNext-Regular";

	${({ title, large, small }) => {
		switch (true) {
			case title:
				return `font-size:32px`;
			case large:
				return `font-size:20px`;
			case small:
				return `font-size:13px`;
		}
	}};

	${({ bold, heavy }) => {
		switch (true) {
			case bold:
				return `font-weight:600`;
			case heavy:
				return `font-weight:700`;
		}
	}};
`;

const TopBackround = styled.ImageBackground`width: 100%;`;

const MenuBar = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 16px;
`;

const Back = styled.View`
	flex-direction: row;
	align-items: center;
`;

const MainRecipe = styled.View`
	padding: 0.32px;
	margin: 200px 0 32px 32px;
`;

const Devider = styled.View`
	border-bottom-color: #fff;
	border-bottom-width: 2px;
	width: 150px;
	margin: 8px 0;
`;

const Button = styled.TouchableOpacity`
	margin: 0 0 48px 32px;
	background-color: rgba(255, 255, 255, 0.3);
	align-self: flex-start;
	padding: 5px 18px;
	border-radius: 100px;
`;

const RecipesContainer = styled.ScrollView`
	margin-top: -24px;
	padding: 32px;
	background-color: #fff;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
`;

const Recipes = styled.View`margin-top: 16px;`;

const Recipe = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 16px;
`;

const RecipeImage = styled.Image`
	width: 60px;
	height: 60px;
	border-radius: 6px;
`;

const RecipeInfo = styled.View`
	flex: 1;
	margin-left: 12px;
`;

export default Detail;
