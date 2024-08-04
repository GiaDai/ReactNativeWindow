import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const DetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg font-bold mb-4 text-gray-700`}>Details Screen</Text>
      <TouchableOpacity
        style={tw`bg-blue-500 px-4 py-2 rounded`}
        onPress={() => navigation.goBack()}
      >
        <Text style={tw`text-white text-center`}>Go Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
