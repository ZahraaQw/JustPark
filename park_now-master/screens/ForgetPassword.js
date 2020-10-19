import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text,View,StyleSheet, TextInput,Animated, Dimensions, TouchableOpacity,ScrollView} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
class ForgetPass extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            typing_email:false,
            typing_user:false,
            typing_pass:false,
            typing_conPass:false,
            isValidUser:true,
            isValidPassword:true,
            isValidEmail:true,
            isValidConPassword:true,
            animation_login:new Animated.Value(width-100),
            enable:true,
            disabled_press:false,

         };
    }
      
    _foucus(value){
      

            if(value=="email"){
                this.setState(
                    {
                        typing_email:true,
                        typing_user:false,
                        typing_pass:false,
                        typing_conPass:false
                    }
                )
            }

            else  if(value=="user"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:true,
                        typing_pass:false,
                        typing_conPass:false
                    
                    }
                )
            }

            else  if(value=="pass"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:false,
                        typing_pass:true,
                        typing_conPass:false
                    
                    }
                )
            }

            else  if(value=="passC"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:false,
                        typing_pass:false,
                        typing_conPass:true
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
              marginTop:100,
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
              typing_email:false,
              typing_user:false,
              typing_pass:false,
              typing_conPass:false
          })
      },150);
  }
    validate(text,type){
       E=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(type=='email'){
            if(E.test(text))
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


    render(){
         const width =  this.state.animation_login;
    return(
        
        <View  style={ styles.container } >
            
         

                <Text style={ styles.textSignup}
                > Forget Your Password</Text>
                <Text style={styles.text} >Reset Password Now </Text>
                <ScrollView  style={styles.footer}>

           <Animatable.View 
            
            animation="bounceInUp"
            duration={5000}
           >
           <View>

             <View style={styles.action}>
            <View style={{flexDirection:"row"}}>
             <FontAwesome
                name="envelope-o"
                 color="#05345a"
                 size={24}
                 style={{paddingTop:90,paddingEnd:4,marginTop:6}}
              
              />
               <TextInput
                    style={{ height:60, width:260,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:80,marginBottom:30,fontSize:14}}
                    placeholder="Enter your email address "
                    onFocus={()=>this._foucus("email")}nter
                    onChangeText={(text)=>this.validate(text,'email')}/>
 
                  {this.state.typing_email ?
                 this._typing()
                  :null }
                 </View>
                 {this.state.isValidEmail ? null : 
                    <Animated.View
                        animation="fadeInLeft" duration={500}
                        > 
                        <Text style={styles.ErrMsg}>Email must follow Email format. </Text>
                        </Animated.View>
                 }
                  
                 
                  </View>
                 
                 </View>


                   <TouchableOpacity
                     style={{ opacity:this.state.disabled_press ? 0.5 : 1 }}
                     disabled={this.state.disabled_press}
     
           onPress={()=>this._animation()}>
            
           <View style={styles.Butt_cont}>
               <Animated.View style={[styles. anmation,{width}]}>
                {this.state.enable?
               <Text style={styles.logText}>Send</Text>
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
              <Text style={{color:'#f7c202'}} onPress={()=>this.props.navigation.goBack()}> Back to Sign In</Text>

          </View>
          
           </Animatable.View>
           </ScrollView>
          

           
 
        </View>
        
    );}

}


const width = Dimensions.get("screen").width;

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
        Butt_cont:{
            justifyContent:'center',
            alignItems:'center'
        },
        anmation:{
            backgroundColor:"#00457C",
            paddingVertical:14,
            marginBottom:10,
          //  marginLeft:30,
           // marginRight:90,
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center'
        },            
         signUp:{
            flexDirection:'row',
            justifyContent:'center',
            marginTop:6,
             marginBottom:5
        },
         logText:{
             color:'white',
             fontWeight:'bold',
             fontSize:18
         },
         ErrMsg:{
            color:"red",
            fontSize:10,

        }

     } );






    export  default ForgetPass;