import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';


 const App = ()=> {
  const [uri1,setUri1] = useState(DiceSix)
  const [uri2, setUri2] = useState(DiceOne)
      
  const DiceTap1 = ()=>{
    let randomNumber = Math.floor(Math.random() * 6) +1;
    // console.log(randomNumber);
    switch(randomNumber){
      case 1:
        setUri1(DiceOne);
        break;
      case 2:
        setUri1(DiceTwo);
        break;
      case 3:
        setUri1(DiceThree);
        break;
      case 4:
        setUri1(DiceFour);
        break;
      case 5:
        setUri1(DiceFive);
        break;
      case 6:
        setUri1(DiceSix);
        break;
    }
  };
   const DiceTap2 = ()=>{
     let randomNumber = Math.floor(Math.random() * 6)+ 1;
    //  console.log(randomNumber);
     switch(randomNumber){
      case 1:
        setUri2(DiceOne);
        break;
      case 2:
        setUri2(DiceTwo);
        break;
      case 3:
        setUri2(DiceThree);
        break;
      case 4:
        setUri2(DiceFour);
        break;
      case 5:
        setUri2(DiceFive);
        break;
      case 6:
        setUri2(DiceSix);
        break;
     }
  
  };

  const playGameButton = ()=>{
    let playButton1 = Math.floor(Math.random() * 6) + 1
    // console.log(playButton1)
    switch(playButton1){
      case 1:
        setUri1(DiceOne)
        break;
      case 2:
        setUri1(DiceTwo)
        break;
      case 3:
        setUri1(DiceThree)
        break;
      case 4:
        setUri1(DiceFour)
        break;
      case 5:
        setUri1(DiceFive)
        break;
      case 6:
        setUri1(DiceSix)
        break;
    }
    let playButton2 = Math.floor(Math.random() * 6) + 1
    switch(playButton2){
      case 1:
        setUri2(DiceOne)
        break;
      case 2:
        setUri2(DiceTwo)
        break;
      case 3:
        setUri2(DiceThree)
        break;
      case 4:
        setUri2(DiceFour)
        break;
      case 5:
        setUri2(DiceFive)
        break;
      case 6:
        setUri2(DiceSix)
    }
  };

   return (
     <>
    <View style = {styles.container}>
      <View>
        <Text style = {{fontSize:30,color:'#fff'}}>Let's Play With Dice</Text>
      </View>
      <View style = {{flexDirection:'row', marginTop:50}}>
      <TouchableOpacity onPress = {DiceTap1}>
        <Image source = {uri1} style = {styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {DiceTap2}>
        <Image source = {uri2} style = {styles.image}/>
      </TouchableOpacity>
      </View>
      <TouchableNativeFeedback onPress = {playGameButton}>
      <Text style = {styles.buttonContainer}>Tap Me!</Text>
      </TouchableNativeFeedback>
    </View>
     </>
   )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // flexDirection:'row',
    backgroundColor:'#222831',
    justifyContent:'space-evenly',
    alignItems:'center',
    // borderWidth:2,
    // borderColor:'red'
  },
  image:{
    height:150,
    width:150,
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:30,
    color:'white',
    fontSize:20,
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor:'#30475E',
    borderWidth: 3,
		borderRadius: 20,
		backgroundColor: '#FFA500',

  }
})

export default App