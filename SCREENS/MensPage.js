import React from 'react';
import {Text, StyleSheet, View, Image, Icon, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const MensPage = ({navigation})=>{
    return (
        <View>
        <ScrollView style={styles.BottomView}>
            <Text style={styles.Heading}>
                Shop X (NBA)
            </Text>
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
<Image style={styles.Image} source = {{uri:"https://th.bing.com/th/id/R.6ef89fdab8e3e5aa085b057a58b4d340?rik=J17T6iX%2bkMMaRQ&riu=http%3a%2f%2fsporthx.com%2fimage%2fcache%2fdata%2fNBA%2fbrooklyn-nets-11-kyrie-irving-nba-basketball-swingman-city-jersey-black-edition-shirt-2021-600x800.jpg&ehk=12V%2bn0d41N8Gm%2fejLJBc3Z3e6ka%2fS%2fvDJkOAkYqpXD0%3d&risl=&pid=ImgRaw&r=0"}}>

</Image>
<Text style={styles.ProductName}>
    Brooklyn Nets Jersey (MEN)
</Text>
<Text style={styles.Price}>
    30$
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
      alignSelf:"center",
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
       alignSelf:"center",
   },

})


export default MensPage