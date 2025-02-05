import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  getMapById    from './maps/maps';
import { useState } from 'react';
import { useFonts } from 'expo-font'

export default function App() {
  useFonts({
    'SuperMario': require('./assets/fonts/SuperMario256.ttf'),
    'MenuFont': require('./assets/fonts/AOTFShinGoProMedium.otf')
  });

  const [theMap, setTheMap] = useState(null);

  const handleMap = () => {    
    setTheMap(getMapById());
  }

  mapSelected = (list)  => {
    if (!list) {
      return <Image style={styles.mainImage} source={require(`./assets/Super_Mario_Party_Jamboree_Logo.png`)}></Image>
    }
    return (
      <View style={styles.mapContainer}>
          <Text style={styles.title}>{list.name}</Text>
          <Image source={list.boardIcon}></Image>
     </View>
  );
};

  return (
    <ImageBackground
      source={theMap ? theMap.boardView : null}
      style={styles.container}
      blurRadius={3}
    >

    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {mapSelected(theMap)}
      
      <TouchableOpacity style={styles.button} onPress={handleMap}>
        <Text style={styles.buttonText}> Generate  </Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    marginTop: 10,
    fontSize: 42,
  },
  mainImage: {
    width: 250,
    height: 200
  },
  title: {
    marginBottom: 100
  },
  mapContainer: {
    flex: 0.7,
    backgroundImage: '#ff8f14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    margin: 5,
    textAlign: 'center',
    fontFamily: 'SuperMario',
    color: '#fff',
    
    textShadowColor: '#000',
    textShadowRadius: 20,
  },
  button: {
    borderRadius: 60,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 32,
    fontFamily: 'MenuFont',
    paddingStart: 10,
    paddingBottom: 5
  }
});
