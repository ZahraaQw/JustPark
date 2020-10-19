import React from "react";
import { View, Text, TouchableOpacity, Modal,TextInput, StyleSheet,Image} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class PaymentScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text:" ",
            isValidNumber:true,
           
         };
    }

      
    validate(text){
     num=/[0-9]+$/
     if(num.test(text))
     {
     this.setState({
        isValidNumber:true,
     })
     }
     else{

         this.setState({
            isValidNumber:false,
         })
     } 

    }

   
    render() {
        return (
            <View style={{ flex:1,backgroundColor:"#ebf7fc"}}> 

                  <Image
                style={styles.stretch}
                source={require('../assets/paypal2.png')}
              />
             
                <View style={{  
                                justifyContent:"center",
                                alignItems:"center",
                                borderColor: '#00457C',
                                borderWidth: 1.5,
                                marginTop:10,
                                marginLeft:5,
                                marginRight:5,
                                paddingBottom:40,
                                borderRadius:5
                               
                               }}>
                   
                    <Text style={{fontSize:22,color:"#696969", marginTop:30}}>Pay 1₪ To Get 10 Points... </Text>
                            <Text style={{fontSize:12,color:"#C0C0C0", marginVertical:5}}>Points {this.state.text} need {(this.state.text)/10} ₪</Text>
                    <TextInput
                    style={{ height: 50, width:300,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:10,}}
                    placeholder="Enter Number of Points"
        
                    onChangeText={this.handleInputTextChange} 
                    onChangeText={(text)=>this.validate(text)}
                     
                    onChangeText={text => this.setState({ text },
                        () => this.validate(text))}


                    />
                   {this.state.isValidNumber ? null :  
                    <View> 
                    <Text style={styles.ErrMsg}>Points must be Number </Text>
                    </View>
                    }
                   <TouchableOpacity
                    style={{ width: 300, height: 50 ,backgroundColor:"#00457C",borderRadius:5, flexDirection:"row",alignItems:"center", justifyContent:"center",marginTop:10}}                
                    onPress={()=>this.props.navigation.navigate("PayAccount")}
                     >
                      <Icon style={{color:"#00BFFF"}} name='paypal'  size={22} />
                    <Text style={{color:"#fff",textAlign:"center",fontSize:22,paddingLeft:3}}> PayPal</Text>
                  
                </TouchableOpacity>
               
                </View>
              
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputText:{
        flex:1,
        color:"gray", 
        width:300,
        height:100

      },
      ErrMsg:{
        color:"red",
        fontSize:12,
        marginTop:1

    },
    stretch: {
        width: 300,
        height: 70,
        resizeMode: 'stretch',
        marginTop:70,
        marginLeft:25
      }

});