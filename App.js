import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  getMapById    from './maps/maps';
import { useState } from 'react';
import { useFonts } from 'expo-font'

export default function App() {
  useFonts({
    'SuperMario': require('./assets/fonts/SuperMario256.ttf'),
  });

  const [theMap, setTheMap] = useState(null);

  const handleMap = () => {
    
    setTheMap(getMapById());
    // console.log(getMapById());
  }

  mapSelected = (list)  => {
    if (!list) {
      return <Image style={styles.mainImage} source={require(`./assets/Super_Mario_Party_Jamboree_Logo.png`)}></Image>
    }
    return (
      <View style={styles.mapContainer}>
        <Text style={styles.title}>{list.name}</Text>
        <Image source={list.boardIcon}></Image>
        <Text>{list.description}</Text>
        {/* <ImageBackground source={list.boardView}></ImageBackground> */}
    </View>
  );
};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <View>
        
        <Text style={styles.title}> Map Title</Text>
      </View> */}
      {mapSelected(theMap)}
      <TouchableOpacity onPress={handleMap}>
        <Text style={styles.text}> Generate </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    marginTop: 10,
    fontSize: 42,
    // font: './assets/fonts/SuperMario256'
  },
  mainImage: {
    width: 250,
    height: 200
  },
  title: {
    fontSize: 48,
    marginBottom: 100
  },
  mapContainer: {
    flex: 0.7,
    backgroundImage: '#ff8f14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'SuperMario'
  }
});
