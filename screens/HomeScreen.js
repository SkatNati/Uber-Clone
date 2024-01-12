import { StyleSheet, View, Text, Image,SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={styles.paddedTopAndLeft}>
        <Image 
            style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
            }}
            source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
            }} 
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
    paddedTopAndLeft: {
        padding: 5 // This applies padding of 5 units at the left
        },
});