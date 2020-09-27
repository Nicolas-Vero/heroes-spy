import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Info, Sign_out } from '../components/Request';
import Color from '../lib/Color';

const ProfileScreen = ({ navigation }) => {
  const [result, setResult] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Info().then(res => {
      setResult(res['uid']);
      setIsLoaded(true);
    });;
  }, [])

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <Image
        style={styles.itemImage}
        source={require('../../src/res/images/profile-image.png')}
      />
      <Text style={{ fontSize: 48 }}>bonjour {result}</Text>
      <Spacer>
        <Button title="Sign Out" onPress={() => {
          Sign_out().then(navigation.navigate('Connexion'))
        }}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    margin: 30,
    width: 300,
    height: 300,

    borderRadius: 33,
    borderColor: Color.Primary,
  },
  container: {
    alignItems: 'center'
  }
});

export default ProfileScreen;
