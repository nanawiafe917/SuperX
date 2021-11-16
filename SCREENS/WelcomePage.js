import React from "react";
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function  WelcomePage({navigation}){

    const image = { uri: "https://images.unsplash.com/photo-1551479460-5e76c686816a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=835&q=80"};
    
    return (
        <View style = {styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.ProjectName}>
            </Text>
        <TouchableOpacity style={styles.TextButton1} onPress= { () => {navigation.navigate("LogInPage"); }} >
               <Text style={styles.GetStartedText}>
                 SHOP NOW
               </Text>
         </TouchableOpacity>
    
            </ImageBackground>
         </View>
    )
        
};

const styles = StyleSheet.create({

container:{
    flex: 1,
},
image:{
    flex: 1,
    justifyContent: "center"
},
TextButton:{
    width: 300,
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
    alignSelf: "center",

},
TextButton1:{
    width: 300,
    marginTop: '120%',
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
    alignSelf: "center",

},

GetStartedText:{
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 22,
    textAlign: "center",
    justifyContent: "center",
    
},

ProjectName:{
    color: "orange",
    fontWeight: "bold",
    fontSize: 80,
    fontStyle: "italic",
    textAlign: "center",
    justifyContent: "center",
}

})

 