import React from 'react';
import {Text, StyleSheet, View, Image, Icon, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const WomensPage = ({navigation})=>{
    return (
        <View>
        <ScrollView style={styles.BottomView}>
            <Text style={styles.Heading}>
                Shop X (WNBA)
            </Text>
            <Image style={styles.Image} source = {{uri:"https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4057000/altimages/ff_4057579-6c0c5734f91e9bb657d9alt1_full.jpg&w=900"}}>

</Image>
<Text style={styles.ProductName}>
    Seattle Storm Jersey (WOMEN)
</Text>
<Text style={styles.Price}>
    19$
</Text>
<TouchableOpacity onPress= {() => {navigation.navigate("Cart");}} >
<FontAwesome style={styles.Icon} name="cart-plus" size={50} color="black" />
</TouchableOpacity>

<Image style={styles.Image} source = {{uri: "https://th.bing.com/th/id/OIP.Aio8ZWzDT5AhYk1zBLxKgwHaHa?pid=ImgDet&rs=1"}}>

</Image>
<Text style={styles.ProductName}>
    Equality Jersey (WOMEN)
</Text>
<Text style={styles.Price}>
    25$
</Text>
<TouchableOpacity onPress= {() => {navigation.navigate("Cart");}} >
<FontAwesome style={styles.Icon} name="cart-plus" size={50} color="black"/>
</TouchableOpacity>
<Image style={styles.Image} source = {{uri: "https://th.bing.com/th/id/R.500e36a48553f4fd2bd4e2fa9b471467?rik=fm2GhR71FzwpJg&riu=http%3a%2f%2fmysizejersey.com%2fimages%2fsource%2fWNBA%2fLos_Angeles_Sparks%2fjersey-wnba-sparks-ladies-custom-purple.jpg&ehk=uXZ4pozPa8Z96Bt6wwYlgDvEY7LreCHBonJb12s6JCY%3d&risl=&pid=ImgRaw&r=0"}}>

</Image>
<Text style={styles.ProductName}>
    LA Sparks Jersey (WOMEN)
</Text>
<Text style={styles.Price}>
    28$
</Text>
<TouchableOpacity onPress= {() => {navigation.navigate("Cart");}} >
<FontAwesome style={styles.Icon} name="cart-plus" size={50} color="black"/>
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


export default WomensPage