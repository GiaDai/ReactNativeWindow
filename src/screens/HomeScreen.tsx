import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import tw from 'twrnc';
type HomeScreenNavigationProp = StackNavigationProp<ParamListBase, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg font-bold mb-4 text-gray-700`}>Home Screen</Text>
      <TouchableOpacity
        style={tw`bg-blue-500 px-4 py-2 rounded`}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={tw`text-white text-center`}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
