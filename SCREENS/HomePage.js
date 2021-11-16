import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, View, Image, Icon, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const HomePage = ({navigation})=>{
    return (
        <View>
        <ScrollView style={styles.BottomView}>
            <Text style={styles.Heading}>
                Welcome To Shop X
            </Text>
            <TouchableOpacity style={styles.TextButton1} onPress= { () => {navigation.navigate("MensPage"); }} >
               <Text style={styles.GetStartedText}>
                 NBA
               </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.TextButton2} onPress= { () => {navigation.navigate("WomensPage"); }} >
               <Text style={styles.GetStartedText1}>
                 WNBA
               </Text>
         </TouchableOpacity>
                <Image style={styles.Image} source = {{uri:"https://th.bing.com/th/id/R.192a20fef0791d1fab11756edd4a3300?rik=eWjBGvxU%2b5zu5g&pid=ImgRaw&r=0"}}>

            </Image>
            <Text style={styles.ProductName}>
                Chicago Bull Jersey (MEN)
            </Text>
            <Text style={styles.Price}>
                19$
            </Text>
            <TouchableOpacity onPress= {() => {navigation.navigate("Cart");}} >
            <FontAwesome style={styles.Icon} name="cart-plus" size={50} color="black" />
            </TouchableOpacity>

            <Image style={styles.Image} source = {{uri:"https://th.bing.com/th/id/R.66d1b3400a49030a55877b169e49847e?rik=v%2f4U7J3Gyv2qmw&riu=http%3a%2f%2fwww.injerseys.com%2fcache_bmz%2f22135%2fMen-Los-Angeles-Lakers-23-Lebron-James-2020-2021-City-Edition-Stitched-NBA-Jersey_22135_550X550.jpg&ehk=1R3g1u3Gr%2bBDxGBpZqsX%2bdbwRyCExpbjpKp1e6RRe%2fo%3d&risl=&pid=ImgRaw&r=0"}}>

            </Image>
            <Text style={styles.ProductName}>
                Lakers Jersey (MEN)
            </Text>
            <Text style={styles.Price}>
                25$
            </Text>
            <TouchableOpacity onPress= {() => {navigation.navigate("Cart");}} >
            <FontAwesome style={styles.Icon} name="cart-plus" size={50} color="black"/>
            </TouchableOpacity>
            <Image style={styles.Image} source = {{uri:"https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4057000/altimages/ff_4057579-6c0c5734f91e9bb657d9alt1_full.jpg&w=900"}}>

            </Image>
            <Text style={styles.ProductName}>
                Seattle Storm (WOMEN)
            </Text>
            <Text style={styles.Price}>
                20$
            </Text>
            <TouchableOpacity onPress= {() => {navigation.navigate("Cart");}} >
            <FontAwesome style={styles.Icon} name="cart-plus" size={50} color="black" />
            </TouchableOpacity>


         </ScrollView>
         </View>   
    )
}

const styles = StyleSheet.create ({
    
    BottomView:{
        width:"100%",
        height:"100%",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    ImageStyle:{
        resizeMode: "contain", 
        alignContent: "center",
   },
   
   Heading:{
       color:"black",  
       fontSize: 40,
       fontWeight: "bold",
       marginTop: 60,
       justifyContent: "center",
       textAlign: 'center',
       
   },

   Image:{
       height: 200,
       width: 200,
      marginTop:'10%',
      alignSelf: "center",
   },

   Price:{
       textAlign:'center',
       fontWeight:'bold',
       
   },

   ProductName:{
    textAlign:'center',
    fontWeight:'bold',
    marginTop:'3%',
    
},

   Icon:{
       marginTop:'1%',
       alignSelf:'center',
   },

   TextButton1:{
    width: 300,
    backgroundColor: "#808080",
    padding: 15,
    textAlign:'center',
    justifyContent: "center",
    marginTop:'5%',
    alignSelf:"center",

},

GetStartedText:{
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 22,
    textAlign: "center",
    justifyContent: "center",
    
},

TextButton2:{
    width: 300,
    backgroundColor: "#808080",
    padding: 15,
    textAlign:'center',
    justifyContent: "center",
    marginTop:'5%',
    alignSelf:"center",

},

GetStartedText1:{
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 22,
    textAlign: "center",
    justifyContent: "center",
    
},

})


export default HomePage