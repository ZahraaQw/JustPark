import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text,View,StyleSheet, TextInput, Animated, TouchableOpacity,Dimensions, Button,ScrollView} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import * as Animatable from 'react-native-animatable';


class SignInScreen extends Component{


    constructor(props) {
        super(props);
        this.state = { 
            typing_user:false,
            typing_pass:false,
            animation_login:new Animated.Value(width-120),
            enable:true,
            isValidUser:true,
            isValidPassword:true,
            disabled_press:false,
         };
    }
      
    _foucus(value){
      
  if(value=="user"){
                this.setState(
                    {
                        typing_user:true,
                        typing_pass:false,
                    
                    }
                )
            }

            else  if(value=="pass"){
                this.setState(
                    {
                        typing_user:false,
                        typing_pass:true,
                    
                    }
                )
            }

           
     
    }

 
    _typing(){
        return (
            <TypingAnimation 
              dotColor="#00457C"
              
              style={{
                position: 'absolute', 
                  marginTop:60,
                  marginLeft:240,
                  
              }}
            
            />
          );
      
      }
      _animation(){
          Animated.timing(
              this.state.animation_login,{
                  toValue:50,
                  duration:250
              }
          ).start();
    
          setTimeout(()=>{
              this.setState({
                  enable:false,
                  typing_user:false,
                  typing_pass:false,
              })
          },150);
      }
      validate(text,type){


        alph =/^[a-zA-Z]+$/
        num =/^[0-9a-zA-Z]+$/
       if(type=='username'){
        if(alph.test(text))
        {
          this.setState({
            isValidUser:true,
          })
        }
        else{

            this.setState({
                isValidUser:false,
            })
        } 
       }
       else if(type=='password'){
        if((num.test(text))&& (text.trim().length >7))
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
       


    }



  
    render(){
        const width= this.state.animation_login;
    return(
        
        <View  style={ styles.container } >
           
           <Text style={styles.textSignup}> Welcome Back</Text>
            <Text style={styles.text} >Sing In </Text>
            <ScrollView  style={styles.footer}>
           <Animatable.View
           
          

            animation="bounceInUp"
            duration={4000}
           >
     
     <ScrollView >
         
            
            <View style={styles.action}>
                   <View style={{flexDirection:"row"}}>
                     <FontAwesome
                            name="user-o"
                            color="#05345a"
                            size={24}
                            style={{paddingTop:60,paddingEnd:10}}
                        
                        />
                 <TextInput
                    style={{ height:50, width:250,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:50,fontSize:14}}
                    placeholder=" Enter User Name "
                    onFocus={()=>this._foucus("user")}
                    onChangeText={(text)=>this.validate(text,'username')}/>
    
                  {this.state.typing_user ?
                  this._typing()
                  :null }
                 </View>       
                    
                    {this.state.isValidUser ? null :  
                        <Animated.View
                        animation="fadeInLeft" duration={500}> 
                    <Text style={styles.ErrMsg}>UserName must be  just character</Text>
                    </Animated.View>
                    }
                    </View>
             <View style={styles.action}>
                 <View style={{flexDirection:"row"}}>
             <FontAwesome
                 name="lock"
                 color="#05345a"
                 size={26}
                 style={{paddingTop:20,paddingEnd:15}}
              />
                 <TextInput
             
                  secureTextEntry
                   style={{ height:50, width:250,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:10,fontSize:12}}
                    placeholder="********"
                    onFocus={()=>this._foucus("pass")}
                    onChangeText={(text)=>this.validate(text,'password')}
                   />
                        
                {this.state.typing_pass ?
                 this._typing()
                  :null }
            </View>
                {this.state.isValidPassword ? null : 
                    <Animated.View
                        animation="fadeInLeft" duration={500}
                        > 
                        <Text style={styles.ErrMsg}>Password must be 8 long   . </Text>
                        </Animated.View>
                 }
                 </View>
                 </ScrollView>
            <View>
               <Text style={{color:"#00457C" ,fontSize:12,marginBottom:30,marginTop:18,marginLeft:36}} 
               onPress={()=>this.props.navigation.navigate("Forget Password")}>Forgot Password ?</Text>
           </View>
            <TouchableOpacity
            style={{ opacity:this.state.disabled_press ? 0.5 : 1 }}
            disabled={this.state.disabled_press}
            onPress={()=>this._animation()} >
           
           <View style={styles.Butt_cont}>
               <Animated.View style={[styles. anmation,{width}]}>
                {this.state.enable?
               <Text style={styles.logText}>Sign In</Text>
               :
               <FontAwesome
               name="check"
                color="white"
                size={20}
               /> }
                
               </Animated.View>
           </View>
           </TouchableOpacity>
  
         <View style={styles.signUp}>
               <Text style={{color:'black'}}> New User? </Text>
               <Text style={{color:'#f7c202'}} onPress={()=>this.props.navigation.navigate("Sing Up")}>Sign Up?</Text>
              

           </View>


           </Animatable.View >
           </ScrollView>
        </View>
    );}

}


const width = Dimensions.get('window').width;

    const styles = StyleSheet.create({
        container: {
            flex: 2,
            backgroundColor:"white",
            justifyContent:'center',
            alignItems:"center",
            backgroundColor:"#00457C",
        },

        
        header:{
            backgroundColor:"white",
            flex:2,
            justifyContent:"center",
            alignItems:"center",
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 800,
  
        },

        footer:{
            marginTop:25,
            backgroundColor:"#e6e7f0",
            flex:1.5,
            paddingLeft:25,
            paddingRight:46,
            paddingTop:20,
            borderWidth:1.5,
            borderColor:"#9acdf5",
            borderTopLeftRadius:60,
            borderTopRightRadius:60,        
        },
        textSignup:{
            color:"#fff",
            fontSize:25,
            marginTop:40,
            fontFamily:'Lobster-Regular'

        },
        text:{
            color:"#f7c202",
            fontSize:15,
            marginLeft:13,
            fontFamily:'Lobster-Regular'

           
        },

        title:{
         color:"black",
         fontWeight:"bold",
            fontSize:14,
        },

        action:{
            flexDirection:"row",
      
        },

        inputText:{
          flex:1,
          marginTop:1,
          paddingBottom:0,
          color:"gray"

        },
      
       
        textLogin:{
          color:'white',
          fontWeight:'bold',
          fontSize:14

        },
        signUp:{
            flexDirection:'row',
            justifyContent:'center',
            marginBottom:100
        },
        Butt_cont:{
            justifyContent:'center',
            alignItems:'center'
        },
         anmation:{
             backgroundColor:"#00457C",
             paddingVertical:14,
             marginBottom:12,
             marginLeft:40,
             marginRight:10,
             borderRadius:100,
             justifyContent:'center',
             alignItems:'center'
         },       
        
         logText:{
             color:'white',
             fontWeight:'bold',
             fontSize:14
         },
         ErrMsg:{
            color:"red",
                     


        }
      


     } );






    export  default SignInScreen