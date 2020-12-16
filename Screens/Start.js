import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const StartWrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled(TouchableOpacity)`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 150;
  background-color: red;
`;

const StartButtonText = styled(Text)`
  color: black;
  font-size: 48px;
`;

const Start = ({ navigation }) => (
 
  <StartWrapper style={styles.wrap}>
    <StartButton onPress={() => navigation.navigate('Game')}>
      <StartButtonText> Tic Tac Toe </StartButtonText>
    </StartButton>
  </StartWrapper>
  
);

const styles = StyleSheet.create({
  wrap:{
   backgroundColor: "grey"
  }
})


export default Start;
