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

    let teste = [15,19,23,27,29,32,35,37,40,42,45,48,50,53,54,58,62]
    let coresDio = []
    let key = 0
    let count = 0 


    for (let i =0;i<78;i++){
        if (i == 14 || i == 15 || i == 19 || i == 23 || i == 27 || i == 29 || i ==  32 || i == 35 || i == 37 || i ==  40 || i == 42 || i == 45 || i == 48 || i == 50 || i == 53 || i == 54 || i == 58 || i == 62){
            coresDio.push("#98FB98")
        }else{
            coresDio.push("#228B22")
        }
    }


    console.log(coresDio)


    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image accessibilityLabel="Foto de perfil do Matheus Balbino" style={style.avatar} source={{ uri: imageProfileGithub }} />
                <Text accessibilityLabel="Nome Matheus Balbino" style={[style.defaultText, style.name]}>Matheus Balbino</Text>
                <Text accessibilityLabel="Apelido matheusbalbino1" style={[style.defaultText, style.nickname]}>matheusbalbino1</Text>
                <Text accessibilityLabel="Descrição html5, css3, bootstrap, javascript" style={[style.defaultText, style.description]}>HTML5 | CSS3 | BOOTSTRAP | JAVASCRIPT Aprofundando em Javascript!</Text>
            </View>
            <View style={style.formatContainer}>
                {
                coresDio.map((parametro)=>{
                    return <View style={[style.formatDio,{backgroundColor:parametro}]}></View>
                })}
            </View>
            
            <Pressable onPress={handlePressGoToGithub} style={style.content}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                </View>
                
            </Pressable>
            
        </SafeAreaView>
    )
}

export default App;

const style = StyleSheet.create({
    formatContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20,
        marginBottom:20,
        flexWrap:"wrap",
        width:330
    },
    formatDio:{
        width:20,
        height:20,
        backgroundColor:"green",
        marginLeft:5,
        marginBottom:5,
        borderRadius:5
    },
    container: {
        backgroundColor: colorGithub,
        flex: 1, // EXPANDIR A TELA INTEIRA
        justifyContent: "center",
        alignItems:"center"
    },
    content: {
        alignItems: "center",
        padding: 15,
        justifyContent:"center"
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
        width:150,
    },
    textButton: {
        fontWeight: "bold",
        fontSize: 16
    }
})