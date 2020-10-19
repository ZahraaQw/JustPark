import React from "react";
import { View, Text, Image,TouchableOpacity, Modal,TextInput, StyleSheet} from "react-native";
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Pay extends React.Component {
  
    render() {
        return (
            <View>
            <View  style={styles.inner}>
            <Image
                 style={styles.stretch}
                source={require('../assets/paypal.png')}
              />
              <View  style={styles.inner2}>
              <Icon style={{color:"#99D4E9", marginTop:4,marginRight:5}} name='shopping-cart' size={23} />
              <Text style={{fontSize:20,marginRight:3,marginLeft:5}}>₪</Text>
              <Text style={{marginRight:5}}>20.00</Text>
             
              </View>
            </View>

            <View style={{backgroundColor:"#F0F8FF",height:70,borderBottomColor: '#D3D3D3',
            borderBottomWidth: 1,}}>
                <Text style={{marginLeft:15,marginTop:24}}>Hi, Islam!</Text>
            </View>
            <View>
                <Text style={{color:"#B6B6B4", fontSize:25, marginTop:24,marginLeft:15}}>Ship to </Text>
                <Text style={{ fontSize:19, marginTop:15,marginLeft:15}}>Islam Mohammed </Text>
                <Text style={{color:"#848482", fontSize:16,marginLeft:15}}>jaloud, Nablus</Text>

            </View>
              
            <View
                style={{
                    borderBottomColor: '#D3D3D3',
                    borderBottomWidth: 1,
                    width:"100%",
                    marginTop:22
                }}
                />
                <View>
                    <Text style={{color:"#B6B6B4",fontSize:20, marginTop:24,marginLeft:15}}>Pay With</Text>
                     <View style={styles.inner2}>
                         <View style={{ flexDirection:"row",
                       }}>
                           <View style={{   width: 40,
                                        height: 40,
                                        borderRadius: 20,
                                        backgroundColor:"#E5E4E2",
                                        marginTop:15,
                                        marginLeft:15,
                                        justifyContent:"center",
                                        alignItems:"center",
                                        textAlign: "center",

                                        }}>
                     <Icon style={{color:"#00457C"}} name='paypal'  size={22} />
                     </View>
                     <Text style={{fontSize:17,marginLeft:12,marginTop:24}}>Balance</Text>
                     </View>
                     <Text style={{marginRight:60,marginTop:24}}> ₪ 20.00</Text>
                     </View>

                </View>
                <View
                style={{
                    borderBottomColor: '#D3D3D3',
                    borderBottomWidth: 1,
                    width:"100%",
                    marginTop:22
                }}
                />
                <View style={{marginTop:10}}>

                <TouchableOpacity
                    style={{ width: 310, height: 45 ,marginLeft:21,marginTop:20,backgroundColor:"#00457C",borderRadius:5, flexDirection:"row",alignItems:"center", justifyContent:"center",marginTop:30}}                
                     > 
                    <Text style={{color:"#fff",textAlign:"center",fontSize:22,paddingLeft:3}}>Pay Now</Text>
                  
                </TouchableOpacity>
                </View>
                
            </View>
           
        );
    }
}


const styles = StyleSheet.create({
    container:{
     backgroundColor:"#ebf7fc",
    flex:1,
   

    },
    stretch: {
        width: 140,
        height: 60,
        resizeMode: 'stretch',
        marginTop:5
      },
   inner:{
    flexDirection:"row",
    alignItems:"center", 
    justifyContent: 'space-between',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    height:75
   
   },
   inner2:{
    flexDirection:"row",
    alignItems:"center", 
    justifyContent: 'space-between',}
});