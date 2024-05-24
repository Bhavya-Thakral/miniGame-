import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {LinearGradient} from "expo-linear-gradient" 
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";


export default function Index() {
  const[userNum,setUserNum]=useState(null);
  const[gameOver,setGameOver]=useState(true);
  const [count,setCount]=useState(0);

  function pickedNum(enterdNum: any){
    console.log("1");
    
    setUserNum(enterdNum);
    console.log("2");
    setGameOver(false);
    console.log("3");
  }

  function gameOverHandler(){
    setGameOver(true);
  }

  function countSteps(count:any){
    setCount(count);
  }

  function restartHandler(){
    setUserNum(null);
    setGameOver(true);
    setCount(0);
  }

  let screen = <StartGameScreen onConfirmedNumber={pickedNum} />
  if(userNum){
    console.log("screen to game");
    
    screen = <GameScreen userNum={userNum} onGamerOver={gameOverHandler} countHandler={countSteps} />
  }

  if(gameOver && userNum){
    screen= <GameOverScreen userNum={userNum} steps={count} restartGame={restartHandler}/>
  }

  return (
    <GestureHandlerRootView>
      <LinearGradient colors={[Colors.yellow,Colors.pink]} style={styles.rootScreen}>
        <ImageBackground style={styles.rootScreen} imageStyle={styles.imgBg} source={require("../assets/images/diceBg.jpeg")}
        resizeMode="cover">
    <SafeAreaView style={styles.page}>

        {screen}
        </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  imgBg:{
    opacity:.08
  },
  page: {
    flex: 1,
    
  },
})