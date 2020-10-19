
import React, {useState} from 'react';

import {Text,View,StyleSheet,Alert,TouchableOpacity} from 'react-native';
import CountDown from 'react-native-countdown-component';
import ExtendDuration from './ExtendDuration';

const SettingScreen=({navigation})=>{
    const [totalDuration, setTotalDuration] = useState(10);
    const [isFinished,setIsFinished] = useState(false);
    let timeSec;

     const cancleTimer=()=>{
        Alert.alert(
            'Alert Title',
            'Are you sure you want to stope booking?',
            [
           
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () =>{ 
                console.log("hello");  
                setTotalDuration(0);
                } }
            ],
            { cancelable: false }
          );
     }
      const updateTime=(h,m)=>{
        timeSec= h*60*60 + m*60;
        setTotalDuration(timeSec);

        Alert.alert(
            'Alert Title',
            'Are you sure that you want to extends reservation',
            [
           
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () =>{
                console.log(timeSec);  
                setTotalDuration(timeSec);
               } }
            ],
            { cancelable: false }
          );
       
    }
    return(
    <View  style={ styles.container }>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.titleSt}>Slot ID   13</Text>
        
        </View>

        <View  style={styles.timer_stl}>
       
       <CountDown
         until={totalDuration}
            digitStyle={
                {
                    backgroundColor:"#fbf2fc",
                    
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 11,
                    },
                    shadowOpacity: 0.55,
                    shadowRadius: 14.78,
                    
                    elevation: 22,
                }
               
          }

          digitTxtStyle={
              {
                  color:"#00457C",
                  fontSize:18,

              }
          }
          timeLabelStyle={
              {
                  fontSize:15,
                color:"#3e4a4d"
              }
             
          }
          timeLabels={
            {d: 'D', h: 'H', m: 'M', s: 'S'}
          
          }
         timetoShow={('H', 'M', 'S')}
         onFinish={() =>{ alert('finished');setIsFinished(true)}}
        
         size={21}
       />
       </View>
       <ExtendDuration  triggerParentUpdate={updateTime} stope={cancleTimer} finish={isFinished}/>
    

      </View>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#ebf6fa",
    },
    titleSt:{
        marginLeft:90, 
        marginTop:40,
   //    marginBottom:10,
        color:"#00457C",
       fontSize:25,
       fontFamily:'BungeeInline-Regular',
    },
   

   

    timer_stl:{
        marginTop:2,
    },
   

});



export  default SettingScreen;