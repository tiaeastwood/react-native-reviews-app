import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import Navigator from "./routes/homeStack";

SplashScreen.preventAutoHideAsync();

const App = () => {
	const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<View style={styles.container} onLayout={onLayoutRootView}>
				<Navigator />
			</View>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
