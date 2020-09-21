import React from 'react';
import {View,Text,StyleSheet,FlatList, Image,SafeAreaView,TouchableOpacity,ActivityIndicator, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Color from '../lib/Color';
import * as Progress from 'react-native-progress';
import { AntDesign } from '@expo/vector-icons'; 
import {withNavigation} from 'react-navigation';

const InfluencerDetail = ({influencer,navigation}) => { 
  
    return(

      <View style={styles.itemTopContainer}>
        <View style={styles.itemSubContainer}>
          <View style={[styles.itemContentContainer,]}>
            <TouchableOpacity
              style={styles.itemImageContainer}
              onPress={()=>{navigation.navigate('Show',{item:influencer })}}
            >
              <Image
                style={styles.itemImage}
                source={{uri: influencer.avatar}}
              />
            </TouchableOpacity>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, color: Color.SecondaryText,  fontWeight: "bold"}}>{influencer.name}</Text>
              <Text style={{fontSize: 12, color: Color.Primary}}>{influencer.instagram_name}</Text>
              <Text style={{fontSize: 8, color: '#707070'}}>{influencer.country}|{influencer.placement_count } placement</Text>
              <Text style={{fontSize: 8, color: '#707070'}}>{influencer.followers_count}</Text>
            </View>
            <TouchableOpacity style={{justifyContent: "center", alignItems: "center", marginHorizontal: 5,}}
                              onPress={()=>{navigation.navigate('Show',{item:influencer })}}>
           <AntDesign name="instagram" size={24} color="black" />
            </TouchableOpacity>
           
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View >
              <Text>Engagement          {Math.round(influencer.engagement_rate)}%</Text>
            <Progress.Bar progress={influencer.engagement_rate/100}  />
            </View>
            <View>
          
              <TouchableOpacity 
              style={styles.container} 
              title='detail'
              onPress={()=>{navigation.navigate('Show',{item:influencer })}}
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
      height: 140,
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

export default withNavigation(InfluencerDetail);