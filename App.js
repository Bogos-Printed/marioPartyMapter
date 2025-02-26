import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getMapById, getAllMaps } from './maps/maps';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as Haptics from 'expo-haptics';
import defaultBackground from './assets/background-default.jpg';
import { Audio } from 'expo-av';

export default function App() {
  useFonts({
    'SuperMario': require('./assets/fonts/SuperMario256.ttf'),
    'MenuFont': require('./assets/fonts/AOTFShinGoProMedium.otf')
  });

  const [theMap, setTheMap] = useState(null);
  const [sound, setSound] = useState();
  const [music, setMusic] = useState();
  // const allMaps = getAllMaps();

  const playSound = async () => {
    const {sound} = await Audio.Sound.createAsync( 
      require('./assets/audio/button-soundeffect.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    let bgMusic;

    const loadMusic = async () => {
      const {sound} = await Audio.Sound.createAsync(
        require('./assets/audio/main-theme.mp3'),
        {isLooping: true}
      );
      bgMusic = sound;
      setMusic(bgMusic);
      await bgMusic.playAsync();
    };
    loadMusic();

    return () => {
      if (bgMusic) {
        bgMusic.unloadAsync();
      }
    }
  }, []);

  const handleMap = () => {   
    playSound();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft); 
    setTheMap(getMapById());
  }
  // mapRoll = () => {
  //   // allMaps.push()
  // }

  mapSelected = (list)  => {
    if (!list) {
      return <Image style={[styles.mainImage]} source={require(`./assets/Super_Mario_Party_Jamboree_Logo.png`)}></Image>
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
      source={theMap ? theMap.boardView : defaultBackground}
      style={styles.container}
      blurRadius={3}
    >

    <View style={styles.container}>
      <StatusBar style="auto" />
   
      {mapSelected(theMap)}
      
      <TouchableOpacity style={styles.button} onPress={handleMap}>
        <Text style={styles.buttonText}> Let's go !  </Text>
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
    height: 200,
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
    // width: 195,
    borderRadius: 60,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 32,
    width: 190,
    fontFamily: 'MenuFont',
    paddingStart: 10,
    paddingBottom: 5
  }
});
