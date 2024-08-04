import Login from '@/components/Login';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import tw from 'twrnc';
import { API_URL } from '@env';
import AppNavigator from './navigation/AppNavigator';
console.log(API_URL);
const App = () => {
  return (
    <AppNavigator />
  );
};

export default App;
