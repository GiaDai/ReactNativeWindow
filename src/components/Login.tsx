import React from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email is required" }),
  password: z.string().nonempty({ message: "Password is required" })
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Text style={tw`text-lg font-bold mb-4 text-gray-700`}>Login</Text>

      <View style={tw`w-full mb-4`}>
        <Text style={tw`mb-2`}>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tw`border p-2 rounded`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && <Text style={tw`text-red-500`}>{errors.email.message}</Text>}
      </View>

      <View style={tw`w-full mb-4`}>
        <Text style={tw`mb-2`}>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tw`border p-2 rounded`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              secureTextEntry
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text style={tw`text-red-500`}>{errors.password.message}</Text>}
      </View>

      <TouchableOpacity
        style={tw`bg-blue-500 px-4 py-2 rounded`}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={tw`text-white text-center`}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
