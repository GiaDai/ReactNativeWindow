import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import tw from 'twrnc';

const Login = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100 p-4`}>
      <View style={tw`w-full max-w-xs`}>
        <Text style={tw`text-2xl font-bold mb-6 text-center text-gray-700`}>Login</Text>
        <View style={tw`mb-4`}>
          <Text style={tw`mb-2 text-gray-700`}>Username</Text>
          <TextInput
            style={tw`border border-gray-400 p-2 rounded`}
            placeholder="Enter your username"
          />
        </View>
        <View style={tw`mb-6`}>
          <Text style={tw`mb-2 text-gray-700`}>Password</Text>
          <TextInput
            style={tw`border border-gray-400 p-2 rounded`}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
        <Button title="Login" onPress={() => {
            Alert.alert('Login', 'You have logged in successfully!');
        }} />
      </View>
    </View>
  );
};

export default Login;
