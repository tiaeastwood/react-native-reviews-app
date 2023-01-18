import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home.tsx";
import ReviewDetails from "../screens/ReviewDetails.tsx";
import globalStyles from "../styles/global";
import colorPalette from "../styles/colorPalette";

const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			title: "GameZone",
		},
	},
	ReviewDetails: {
		screen: ReviewDetails,
		navigationOptions: {
			title: "Review Details",
		},
	},
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: colorPalette.primaryRed,
			height: 80,
		},
		headerTitleStyle: {
			fontFamily: "Poppins-Bold",
			fontSize: 24,
			color: colorPalette.primaryWhite,
		},
		headerTintColor: colorPalette.primaryWhite,
	},
});

export default createAppContainer(HomeStack);
