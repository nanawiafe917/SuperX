import React from "react";
import {Text, StyleSheet,Button,View, Image, TextInput, TouchableOpacity } from "react-native";
const LoginPage = ({navigation})=>{

    return(
        <View>
           <View style={styles.BottomView}>
               <Text style={styles.Heading}>
                   Sign In!
               </Text>
               <View style={styles.FormView}>   
                  <TextInput placeholder={"Email or Username"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                  <TextInput placeholder={" Passcode"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                  <TouchableOpacity onPress = { () => {navigation.navigate("HomePage"); } } style={styles.Button} > 
                      <Text style={styles.ButtonText}>
                          Login
                          </Text>
                  </TouchableOpacity>
               </View>
               <Text></Text>
               <Text style={styles.QuestionText}>
                   New Here? </Text>
               <TouchableOpacity style={styles.TextButton} onPress = { () => {navigation.navigate("SignUpPage"); } }>
               <Text style={styles.SignUpText}>
                   Sign Up
               </Text>
               </TouchableOpacity>
           </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    BottomView:{
        width:"100%",
        height:"100%",
        backgroundColor: "#808080",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    ImageStyle:{
    width: "50%",
    resizeMode: "contain", 
    },
    Heading:{
      color:"#fff",  
      fontSize: 40,
      fontWeight: "bold",
      marginLeft: 30,
      marginTop: 60,
    },
    FormView:{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },

    TextInput:{
        width: "90%",
        borderWidth: 1,
        borderColor: "#fff",
        height: 52,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 20,
    },
    Button:{
        width:"90%",
        color: "#000",
        height: 52,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 20,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
    },
    ButtonText:{
        fontWeight: "bold",
        fontSize: 18,
    },

    QuestionText:{
            color: "#fff",
            textAlign: "center", 
            fontWeight: "bold",
            fontSize: 18,
            
    },

    SignUpText:{
        color: "#fff",
        fontWeight: "bold"
    },
    TextButton:{
        width: "40%",
        height: 22,
        color: "#000",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 92,
    }

})

export default LoginPage