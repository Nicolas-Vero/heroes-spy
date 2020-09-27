import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import { ShopSearchRequest } from '../components/Request';
import ShopDetail from '../components/ShopDetail';


const ResultShopScreen = ({ navigation }) => {
  const [searchResults, setResults] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const searchTerm = navigation.getParam('term')
 


  try {

    useEffect(() => {
      ShopSearchRequest(searchTerm).then(res => {
        setResults(res.data.shops);
        setIsLoaded(true);
      });;
    }, [])


  }
  catch (err) {
    console.log(err);
    setErrorMessage(err)
  }

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
        <Text>shop(s) contenant '{searchTerm}'</Text>
        <FlatList
          data={searchResults}
          keyExtractor={search => search.id.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity>
                  <ShopDetail shop={item} />
                </TouchableOpacity>
              </View>
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
  }
})


export default ResultShopScreen;