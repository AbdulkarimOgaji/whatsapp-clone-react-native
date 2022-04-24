import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyle } from "../styles/global";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from '../routes/HomeStack'


export default function ChatDetails() {
  const handlePress = () => {
    // navigation.navigate("Chat", {message: "This is a demo messagw", date: "soe date"});
  };
  return (
    <View style={globalStyle.container}>
      <Text>zxc</Text>
    </View>
  );
}
