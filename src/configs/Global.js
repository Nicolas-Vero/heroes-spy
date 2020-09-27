import { AsyncStorage } from 'react-native';


export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('headers')
    jsonValue != null ? JSON.parse(jsonValue) : null;
    return jsonValue
  } catch (e) {
    console.log(e.message);
  }
};
