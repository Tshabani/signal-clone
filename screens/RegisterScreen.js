import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePicUrl, setProfilePicUrl] = useState("");

	const onRegister = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				authUser.user.updateProfile({
					displayName: firstName,
					photoURL:
						profilePicUrl || "https://wallpaperaccess.com/full/3102346.jpg",
				});
			})
			.catch((error) => alert(error.message));
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitle: "Back to Login",
		});
	}, [navigation]);
	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />
			<Text h3 style={{ marginBottom: 50 }}>
				Create a signal account
			</Text>
			<View style={styles.inputContainer}>
				<Input
					placeholder="First Name"
					autoFocus
					type="fName"
					value={firstName}
					onChangeText={(text) => setFirstName(text)}
				/>
				<Input
					placeholder="Email"
					type="email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					secureTextEntry
					type="password"
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<Input
					placeholder="Profile Picture Url (optional)"
					value={profilePicUrl}
					onChangeText={(text) => setProfilePicUrl(text)}
				/>
			</View>
			<Button
				title="Register"
				raised
				style={styles.button}
				onPress={onRegister}
			/>

			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white",
	},
	inputContainer: {
		width: 420,
		marginTop: 10,
	},
	button: {
		width: 250,
		marginTop: 10,
	},
});
