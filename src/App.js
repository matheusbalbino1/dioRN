import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking } from "react-native";

const colorGithub = "#010409"
const imageProfileGithub = "https://avatars.githubusercontent.com/u/96322427?v=4"
const urlToMyGithub = "https://github.com/matheusbalbino1"
const colorFontGithub = "#c9d1d9"
const colorDarkFontGithub = "#3F565E"

function App() {

    const handlePressGoToGithub = async ()=>{
        console.log("Verificando Link!")
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log("Link Aprovado!")
           await Linking.openURL(urlToMyGithub);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image accessibilityLabel="Foto de perfil do Matheus Balbino" style={style.avatar} source={{ uri: imageProfileGithub }} />
                <Text accessibilityLabel="Nome Matheus Balbino" style={[style.defaultText, style.name]}>Matheus Balbino</Text>
                <Text accessibilityLabel="Apelido matheusbalbino1" style={[style.defaultText, style.nickname]}>matheusbalbino1</Text>
                <Text accessibilityLabel="Descrição html5, css3, bootstrap, javascript" style={[style.defaultText, style.description]}>HTML5 | CSS3 | BOOTSTRAP | JAVASCRIPT Aprofundando em Javascript!</Text>
            </View>
            <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, // EXPANDIR A TELA INTEIRA
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 5
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold"
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub
    },
    description: {
        fontSize: 14,
        fontWeight: "bold"
    },
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20
    },
    textButton: {
        fontWeight: "bold",
        fontSize: 16
    }
})