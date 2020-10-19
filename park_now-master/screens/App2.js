import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import HomeStackScreen from './mainScreen';
import ExitQr from './ExitCode';
import EnterQr from './EnterCode';
import Find from './Find';
import SignOut from './SignOut';
import Create from './CreateEdit';
import CreatePark from './CreatePark';
import PayPalAccount  from './PayPalAccount';
import CreateAccount from './CreateAccount';
import  ContactInfopay from './ContactInfopay';
import FindPosition from './Find';
import FindMyPosition from './FindMyPosition';
import ParkingHistory from './ParkingHistory';
const Drawer = createDrawerNavigator();
const App2 =({navigation})=>{
    return(

        <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>}

           drawerContentOptions={
               {
                activeBackgroundColor:"black"
               }
           }
        
        drawerStyle={
            {
             backgroundColor:"#ebf6fa",
         
            }
           
        }
        
        
        >
           <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen} />
           <Drawer.Screen name="Exit" component={ExitQr }  />
           <Drawer.Screen name="Enter" component={EnterQr } />
           <Drawer.Screen name="Find" component={Find } />
           <Drawer.Screen name="SingOut" component={SignOut} />
           <Drawer.Screen name="history" component={ParkingHistory} />
           <Drawer.Screen name="Park" component={CreatePark} />
           <Drawer.Screen name="EditProfile" component={Create} />
           <Drawer.Screen name="PayAccount" component={PayPalAccount} navigation="PayAccount"  />
           <Drawer.Screen name="CreateAccount" component={CreateAccount} navigation= "CreateAccount"/>
           <Drawer.Screen name="Contact Info" component={ContactInfopay} navigation= "Contact Info"/>

          
        </Drawer.Navigator>

    )
}
export default App2