import React, { Component } from 'react';
import { Button } from 'react-native';
import  PushNotification  from "react-native-push-notification";

class App extends Component {

  constructor(props) {
  super(props)
    PushNotification.configure({
      
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
      
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

  }

sendMessage=()=>{
  PushNotification.localNotification({
    title: "Park Now Booking",
    message: "The reservation is about to end Less than 5 minutes remain", 
  });
};
  render() {
    return (
      <Button
       onPress={()=>this.sendMessage()}
        title="Press Me"
       
        />
    );
  }
}

export default App;
