import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged((authUser) => {
			if (!authUser) {
				navigation.replace("Login");
			}
		});
		return unSubscribe;
	}, []);
	return (
		<View>
			<Text>Home Screen</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
