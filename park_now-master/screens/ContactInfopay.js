import React from "react";
import { View, Image,Text,TextInput,TouchableOpacity,ScrollView ,StyleSheet} from "react-native";

export default class ContactInfopay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isValidAddress1:true,
            isValidAddress2:true,
            isValidCity:true,
            isValidPhone:true,
          
         };
    }

    validate(text,type){
        alph=/^[a-zA-Z]+$/
        num=/^[0-9]+$/


        if(type=='address1'){
            if(alph.test(text))
            {
            this.setState({
                isValidAddress1:true,
            })
            }
            else{

                this.setState({
                    isValidAddress1:false,
                })
            } 
        }
      else if(type=='address2'){
            if(alph.test(text))
            {
            this.setState({
                isValidAddress2:true,
            })
            }
            else{

                this.setState({
                    isValidAddress2:false,
                })
            } 
        }
        else if(type=='city'){
            if((alph.test(text)))
            {
            this.setState({
                isValidCity:true,
            })
            }
            else{

                this.setState({
                    isValidCity:false,
                })
            }
        }
        else if(type=='phone'){
            if((num.test(text)) && (text.trim().length >9))
            {
            this.setState({
                isValidPhone:true,
            })
            }
            else{

                this.setState({
                    isValidPhone:false,
                })
            }
        }


    }


      
    render() {
        return (
            <View style={{

                flex: 1,
                justifyContent:"center",
                alignItems:"center",
                textAlign: "center",
                backgroundColor:"#fff"
            }}>
            <View   style={styles.container}>
                 <Image
                style={styles.stretch}
                source={require('../assets/paypal2.png')}
              />
              <Text style={styles.text}>Let's start with your contact </Text>
              <Text style={{fontSize:23,color:"#696969"}}>information</Text>
              <Text style={styles.subtext}>We'll need this information to update your account</Text>
              <ScrollView>
              <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:20}}
                    placeholder="Address Line1"
                    onChangeText={(text)=>this.validate(text,'address1')}
                    />
                      {this.state.isValidAddress1 ? null : 
                    <View> 
                        <Text style={styles.ErrMsg}>Address must be  just character</Text>
                        </View>
                    }
                  <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:7}}
                    placeholder="Address Line2"
                    onChangeText={(text)=>this.validate(text,'address2')}
                    />
                        {this.state.isValidAddress2 ? null : 
                      <View> 
                        <Text style={styles.ErrMsg}>Address must be  just character</Text>
                        </View>
                    }

                   <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:7}}
                    placeholder="City"
                    onChangeText={(text)=>this.validate(text,'city')}
                    />
                     {this.state.isValidCity ? null : 
                    <View> 
                        <Text style={styles.ErrMsg}>City must be  just character</Text>
                        </View>
                    }

                        <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:7}}
                    placeholder="Phone"
                    onChangeText={(text)=>this.validate(text,'phone')}
                    />
                     {this.state.isValidPhone ? null : 
                    <View> 
                        <Text style={styles.ErrMsg}>phone must be  just Number</Text>
                        </View>
                    }
                        
               <TouchableOpacity
                    style={{ width: 310, height: 45 ,backgroundColor:"#00457C",borderRadius:5, flexDirection:"row",alignItems:"center", justifyContent:"center",marginTop:25}}                
                     > 
                    <Text style={{color:"#fff",textAlign:"center",fontSize:22,paddingLeft:3}}>Sign Up</Text>
                  
                </TouchableOpacity>
              
                </ScrollView>
                     </View>
                     
            
        </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        textAlign: "center",
        backgroundColor:"#ebf6fa"
    },
    stretch: {
        width: 300,
        height: 50,
        resizeMode: 'stretch',
        marginTop:50
      },
      text:{
       fontSize:23,
       color:"#696969",
       marginTop:15,
       marginLeft:16

      },
      subtext:{
        fontSize:15,
        marginTop:5,
        marginLeft:16,
        color:"gray"
 

      },
      ErrMsg:{
        color:"red",
        fontSize:12,
        marginTop:1

    }

});