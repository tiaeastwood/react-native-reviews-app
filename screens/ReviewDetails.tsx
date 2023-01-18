import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import globalStyles from "../styles/global";

const ReviewDetails = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
			<Text style={globalStyles.bodyText}>
				<Text style={globalStyles.boldBodyText}>Review: </Text>
				{navigation.getParam("body")}
			</Text>
			<Text style={globalStyles.bodyText}>
				<Text style={globalStyles.boldBodyText}>Rating: </Text>
				{navigation.getParam("rating")}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
});

export default ReviewDetails;
