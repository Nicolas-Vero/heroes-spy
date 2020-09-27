import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import InfluencerDetail from '../components/InfluencerDetail';
import { SafeAreaView, withNavigation } from 'react-navigation';
import SearchBar from '../components/SearchBar';

const ResultScreen = ({ navigation }) => {
  //const[searchApi,searchResults,errorMessage]= useResults(); 
  const [results, setresults] = useState();
  const [term, setTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const InfluenceList = async () => {

    try {
      const response = await axios.get('http://heroespy.herokuapp.com/api/v1/influencers')
        .then(res => {
          setresults(res.data.influencers);
          setIsLoaded(true);
        })
    } catch (err) {
      console.log(err);

    }
  };

  useEffect(() => {
    InfluenceList();
  }, [])

  if (!isLoaded) {

    return (


      <View style={[styles.Activitycontainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#696969" />
      </View>


    )
  }
  else {
    return (
      <View >
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => {
            if (!term) {
              navigation.navigate('InfluenceursRecherche', { term: term })
            }
          }}
        />
        <FlatList
          data={results}
          keyExtractor={result => result.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => { navigation.navigate('Placements', { item: item }) }}
              >
                <InfluencerDetail influencer={item} />
              </TouchableOpacity>
            )
          }}
        />
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 3,
    padding: 5,
    marginLeft: 5,
    marginRight: 5
  },
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
});

export default withNavigation(ResultScreen);
