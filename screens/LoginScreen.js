import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Button, Image, Input}  from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSignIn = () => {
        console.log("Sign In Pressed!")
    }
    const onRegister = () => {
        navigation.navigate('Register')
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image 
                source={{
                    uri: "https://wallpaperaccess.com/full/3102346.jpg"
                }}
                style={{ width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder = "Email" 
                    autoFocus type="email" 
                    value={email} 
                    onChangeText = {text => setEmail(text)}/>
                <Input placeholder = "Password" 
                    secureTextEntry 
                    type="password"
                    value={password}
                    onChangeText = {text => setPassword(text)}/>
            </View>
            <Button title="Submit" style={styles.button}
                    onPress={onSignIn}/>
                <Button title="Register" style={styles.button}
                    type='outline'
                    onPress={onRegister}/>
            
            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer:{
        width: 350,
        marginTop: 10,
    },
    button:{
        width: 200,
        marginTop: 10,
    },
})
