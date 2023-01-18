import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
} from "react-native";
import globalStyles from "../styles/global";
import colorPalette from "../styles/colorPalette";

interface IGame {
	title: string;
	rating: number;
	body: string;
	key: string;
}

const Home = ({ navigation }: any) => {
	const [reviews, setReviews] = useState([
		{
			title: "Zelda: Breath of the Wild",
			rating: 5,
			body: "lorem ipsum",
			key: "1",
		},
		{
			title: "Persona 5 Royal",
			rating: 5,
			body: "lorem ipsum",
			key: "2",
		},
		{
			title: "Dragon Quest Treasures",
			rating: 4,
			body: "lorem ipsum",
			key: "3",
		},
	]);

	interface GameItemProps {
		game: IGame;
	}

	const GameItem = ({ game }: GameItemProps) => {
		return (
			<View>
				<TouchableOpacity
					style={styles.gameItem}
					onPress={() => navigation.navigate("ReviewDetails", game)}
				>
					<Text style={styles.gameItemText}>{game.title}</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={reviews}
				renderItem={({ item }) => <GameItem game={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
	gameItem: {
		backgroundColor: colorPalette.primaryBlack,
		marginVertical: 5,
		padding: 10,
		borderRadius: 10,
		fontSize: 18,
	},
	gameItemText: {
		color: colorPalette.primaryWhite,
	},
});

export default Home;
