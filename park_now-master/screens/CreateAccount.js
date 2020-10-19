import React from "react";
import { View, Image,Text,TextInput,TouchableOpacity ,ScrollView,StyleSheet} from "react-native";

export default class CreateAccount extends React.Component {
       
    constructor(props) {
        super(props);
        this.state = { 
            isValidFirstName:true,
            isValidLastName:true,
            isValidPassword:true,
            isValidEmail:true,
            isValidConPassword:true,
         };
    }
   
    validate(text,type){
        alph=/^[a-zA-Z]+$/
            num=/^[0-9a-zA-Z]+$/
            email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(type=='firstname'){
            if(alph.test(text))
            {
            this.setState({
                isValidFirstName:true,
            })
            }
            else{

                this.setState({
                    isValidFirstName:false,
                })
            } 
        }
      else if(type=='lastname'){
            if(alph.test(text))
            {
            this.setState({
                isValidLastName:true,
            })
            }
            else{

                this.setState({
                    isValidLastName:false,
                })
            } 
        }
        else if(type=='password'){
            if((num.test(text)) && (text.trim().length >7))
            {
            this.setState({
                isValidPassword:true,
            })
            }
            else{

                this.setState({
                    isValidPassword:false,
                })
            }
        }
        else if(type=='conpassword'){
            if((num.test(text)) && (text.trim().length >7))
            {
            this.setState({
                isValidConPassword:true,
            })
            }
            else{

                this.setState({
                    isValidConPassword:false,
                })
            }
        }
        else  if(type=='email'){
            if(email.test(text))
            {
            this.setState({
                isValidEmail:true,
            })
            }
            else{
                this.setState({
                    isValidEmail:false,
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
                backgroundColor:"#ebf7fc",
            }}>
            <View   style={styles.container}>
                 <Image
                style={styles.stretch}
                source={require('../assets/paypal2.png')}
              />
              <Text style={styles.text}>Sign Up for PayPal</Text>
              <Text style={styles.subtext}>An easy way to pay and get paid</Text>
            <ScrollView>
              <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:25}}
                    placeholder="Email Address"
                    onChangeText={(text)=>this.validate(text,'email')}
                    />
                      {this.state.isValidEmail ? null : 
                    <View> 
                        <Text style={styles.ErrMsg}>Email must follow Email format. </Text>
                        </View>
                 }
                  <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:7}}
                    placeholder="First name"
                    onChangeText={(text)=>this.validate(text,'firstname')}
                    />

                     {this.state.isValidFirstName ? null : 
                    <View> 
                        <Text style={styles.ErrMsg}>UserName must be  just character</Text>
                        </View>
                    }

                   <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:7}}
                    placeholder="Last name"
                    onChangeText={(text)=>this.validate(text,'lastname')}
                    />
                    
                    {this.state.isValidLastName ? null : 
                    <View> 
                        <Text style={styles.ErrMsg}>UserName must be  just character</Text>
                        </View>
                    }
                        <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:7}}
                    placeholder="Password"
                    onChangeText={(text)=>this.validate(text,'password')}
                    />
                       {this.state.isValidPassword ? null : 
                    <View> 
                        <Text style={styles.ErrMsg}>Password must be 8 long  . </Text>
                        </View>
                 }
                    

                        <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:7}}
                    placeholder="Confirm Password"
                    onChangeText={(text)=>this.validate(text,'conpassword')}
                    />
                     {this.state.isValidConPassword ? null : 
                    <View> 
                        <Text style={styles.ErrMsg}>Password must be 8 long  . </Text>
                        </View>
                 }

          
               <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Contact Info")}
                    style={{ width: 310, height: 45 ,backgroundColor:"#00457C",borderRadius:5, flexDirection:"row",alignItems:"center", justifyContent:"center",marginTop:20}}                
                     > 
                    <Text style={{color:"#fff",textAlign:"center",fontSize:22,paddingLeft:3}}>Next</Text>
                  
                </TouchableOpacity>
                <View style={{flexDirection:"row",alignItems:"center", justifyContent:"center"}}>
                      
             </View>
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
        backgroundColor:"#ebf7fc",
    },
    stretch: {
        width: 300,
        height: 50,
        resizeMode: 'stretch',
        marginTop:50,
        marginLeft:-1
      },
      text:{
       fontSize:25,
       color:"#696969",
       marginTop:15

      },
      subtext:{
        fontSize:15,
        marginTop:5,
        color:"gray"
 

      },
      ErrMsg:{
        color:"red",
        fontSize:12,
        marginTop:1

    }

});