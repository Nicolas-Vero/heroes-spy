import React from 'react';
import {View,Text,StyleSheet,FlatList, Image,SafeAreaView,TouchableOpacity,ActivityIndicator, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Color from '../lib/Color';
import * as Progress from 'react-native-progress';
import { AntDesign } from '@expo/vector-icons'; 
import {withNavigation} from 'react-navigation';

const ShopDetails = ({shop,navigation}) => { 
  
    return(

      <View style={styles.itemTopContainer}>
        <View style={styles.itemSubContainer}>
          <View style={[styles.itemContentContainer,]}>
            <TouchableOpacity
              style={styles.itemImageContainer}
              onPress={()=>{navigation.navigate('Show',{item:shop })}}
            >
              {/* <Image
                style={styles.itemImage}
                source={{uri: shop.logo}}
              /> */}
            </TouchableOpacity>
            <View style={{flex: 1, alignItems:'center' }}>
              <Text style={{fontSize: 17, color: Color.SecondaryText,  fontWeight: "bold"}}>{shop.name}</Text>
              <Text style={{fontSize: 12, color: Color.Primary}}>{shop.shop_url}</Text>
              <Text style={{fontSize: 8, color: '#707070'}}>{shop.country}|{shop.placement_count } placement</Text>
              <Text style={{fontSize: 8, color: '#707070'}}>{shop.placement_count}</Text>
              <View>
            <Text style={{fontSize: 9, color: Color.SecondaryText,  fontWeight: "bold"}}>{shop.shop_description}</Text>
            </View>
            </View>
           
            <TouchableOpacity style={{justifyContent: "center", alignItems: "center", marginHorizontal: 5,}}
                              onPress={()=>{navigation.navigate('Show',{item:shop })}}>
          
            </TouchableOpacity>
           
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View style={{flex: 1, alignItems:'center' }}>
              <TouchableOpacity 
              style={styles.container} 
              title='detail'
              onPress={()=>{navigation.navigate('Show',{item:shop })}}
              ><Text>details</Text></TouchableOpacity>
         
  
            </View>
          </View>
        </View>
      </View>
  
    )
  }


const styles = StyleSheet.create({

  container:{
    borderWidth: 1,
    borderColor : 'black',
    borderRadius :10,
    marginBottom:3,
    padding:5,
    marginLeft: 5,
    marginRight: 5
  },
    

    topContainer: {
      flex: 1,
      marginVertical: 20,
      marginHorizontal: 20,
    },
    subContainer: {
      marginBottom: 15,
    },
    heading: {
      color: Color.Primary,
      fontSize: 16,
      marginBottom: 20,
    },
    locationBar: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ACACAC',
      borderRadius: wp('50%'),
      padding: 12,
      height: 42,
    },
    locationBarText: {
      color: '#ACACAC',
      fontSize: 15,
      marginLeft: 10,
    },
    itemTopContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 240,
      marginTop: 15,
    
    },
    itemSubContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      width: wp("85%"),
      height: '100%',
      backgroundColor: '#FFF0F0',
      borderRadius: 20,
    },
    itemContentContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: "relative",
      paddingLeft: wp("10%")
    },
    itemImageContainer: {
      position: 'absolute',
      left: -wp("10%"),
    },
    itemImage: {
      width: 80,
      height: 80,
      borderWidth: 4,
      borderRadius: 33,
      borderColor: Color.Primary,
    },
    itemButton: {
      height: 32,
      minWidth: 72,
      borderRadius: wp('50%'),
      backgroundColor: '#F38E93',
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default withNavigation(ShopDetails);