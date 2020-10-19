import React from 'react';

import {View, SafeAreaView, StyleSheet,ScrollView,Button} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



const ProfilScreen=({navigation})=>{
    return (
        <ScrollView style={styles.container}>
    
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Avatar.Image 
                source={{
                  uri: 'https://developers.google.com/web/images/contributors/no-photo.jpg',
                }}
                size={80}
              />
              <View style={{marginLeft: 20}}>
                <Title style={[styles.title, {
                  marginTop:30,
                  marginBottom:0,
                }]}>Islam Mohammed</Title>
                <Caption style={styles.caption}>@I_moh</Caption>
              </View>
            </View>
          </View>

          <View>
    
          </View>
    
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
            <FontAwesome name="globe"  color="#65808a" size={20} />
              <Text style={styles.txt}>jalood, Nablus</Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#65808a" size={20}/>
              <Text style={styles.txt}>+91-900000009</Text>
            </View>
            <View style={styles.row}>
            <FontAwesome name="envelope-o"  color="#65808a"  size={20} />
              <Text style={styles.txt}>islam_moh@email.com</Text>
            </View>
            <View style={styles.row}>
            <FontAwesome name="car"  color="#65808a" size={20} />
              <Text style={styles.txt}>795-258-187</Text>
            </View>
          </View>
    
         
          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="credit-card" color="#00457C" size={25}/>
                <Text style={styles.menuItemText}>Payment Info </Text>
              </View>
            </TouchableRipple>
            
          </View>
        </ScrollView>
      );
    };
    
    export default ProfilScreen;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:"#ebf7fc"
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 15,
      },
      title: {
        fontSize: 19,
        fontWeight: 'bold',
        color:"#08374a"
      },
      caption: {
        fontSize: 16,
        color:"#65808a"
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#65808a',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },

      bttn:{
        backgroundColor:"#c49fc4"
      },
      txt:{
        color:"#65808a",
        marginLeft: 25,
        paddingBottom:3,
        


      }

    });
    