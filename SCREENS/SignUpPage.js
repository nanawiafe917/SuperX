import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

const SignUpPage = ({navigation})=>{

    return(
        <View>
       <ScrollView style={styles.BottomView}>
           <Text style={styles.Heading}>
               Sign Up
           </Text>
           <View style={styles.FormView}>   
              <TextInput placeholder={"Full Name"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              <TextInput placeholder={"Email or Username"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              <TextInput placeholder={"Phone Number"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              <TextInput placeholder={"Passcode"} secureTextEntry= {true} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              <TextInput placeholder={"Confirm Passcode"} secureTextEntry= {true} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              
              <TouchableOpacity style={styles.Button}  onPress = { () => {navigation.navigate("HomePage"); } }> 
                  <Text style={styles.ButtonText}>
                      Sign Up
                      </Text>
              </TouchableOpacity>
        
           </View>

           <TouchableOpacity style={styles.TextButton} onPress= {() => {navigation.navigate("LogInPage"); }}>
           <Text style={styles.SignUpText}>
           <Text> Have an account?</Text>
               Login
           </Text>
           </TouchableOpacity>
       </ScrollView>
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

Question:{
    color: "#fff",
    textAlign: "center", 
    fontWeight: "bold",
    fontSize: 18,
}, 

SignUpText:{
    color: "#fff",
},

TextButton:{
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
},

ImageStyle:{
    width: "100%",
    height: 250,
    resizeMode: "contain",
},

})

export default SignUpPage