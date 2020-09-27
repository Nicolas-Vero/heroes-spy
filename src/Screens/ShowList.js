import React, { useContexts, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PlacementDetails from '../components/PlacementDetails';
import Color from '../lib/Color';
const PlacementsList = ({ navigation }) => {
  const [results, setresults] = useState();
  const [influenceur, setInfluenceur] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const influencer = navigation.getParam('item');
  const screenWidth = Dimensions.get("window").width;


  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
        strokeWidth: 2 
      }
    ],
    legend: ["statistiques"]
  };



  const PlacementList = async () => {
    try {

      const response = await axios.get('http://heroespy.herokuapp.com/api/v1/influencers/' + influencer.id)
        .then(res => {
          setInfluenceur(res.data.influencer)
          setresults(res.data.placements);
          setIsLoaded(true);

        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { PlacementList(); }, [])



  if (!isLoaded) {
    return (
      <View style={[styles.Activitycontainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#696969" />
      </View>
    )
  }
  else {

    return (
      <View>

        <View style={styles.container} >
          <View style={styles.itemTopContainer}>

            <View style={styles.itemSubContainer}>

              <View style={styles.itemContentContainer}>
                <View style={styles.itemImageContainer}>
                  <Image
                    style={styles.itemImage}
                    source={{ uri: influenceur.avatar }}
                  />
                </View>
                <View style={{ flex: 1, marginLeft:10}}>

                  <Text style={{ fontSize: 23, color: Color.SecondaryText, fontWeight: "bold" }}>{influenceur.name}</Text>
                  <Text style={{ fontSize: 15, color: Color.Primary }}>{influenceur.instagram_name}</Text>
                  <Text style={{ fontSize: 13, color: '#707070' }}>placement</Text>

                </View>

              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>

          <FlatList
            horizontal={true}
            data={results}
            keyExtractor={result => result.date}
            renderItem={({ item }) => {
              return (
                <View >
                  {item.shop ? <PlacementDetails placement={item} /> : null}
                </View>
              )
            }
            }
          />

        </View>
        <View style={styles.graph}>
          <LineChart
            data={data}
            width={screenWidth}
            height={256}
            verticalLabelRotation={30}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#fafafa",
              backgroundGradientTo: "#f6f6f6",
              decimalPlaces: 2, 
              color: (opacity = 1) => `rgba(125, 125, 125, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(125, 125, 125, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "1",
                stroke: "#f6f6f6"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </View>)
  }
}

const styles = StyleSheet.create({

  Activitycontainer: {
    flex: 1,
    justifyContent: "center"
  },
  itemButton: {
    height: 32,
    minWidth: 72,
    borderRadius: 50,
    backgroundColor: '#F38E93',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    borderRadius: 10,
    marginBottom: 3,
    height: 200,
    padding: 5,
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
    backgroundColor: '#FFF0F0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    marginTop: 15,

  },
  itemSubContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: wp("85%"),
    height: '100%',
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
    borderRadius: 33,
    borderColor: Color.Primary,
  },
})

export default PlacementsList;