import Login from '@/components/Login';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import tw from 'twrnc';
import { API_URL } from '@env';
console.log(API_URL);
const App = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <StatusBar />
      <Login />
      <View style={tw`mt-4`}>
        <Text style={tw`text-center text-gray-700`}>API URL: {API_URL}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
