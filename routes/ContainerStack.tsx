import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ChatTabs from "./ChatsTab";
import { Header } from "../components/Header";
import { ChatDetails } from "../screens";

export type RootStackParamList = {
  ChatTabs: {};
  ChatDetails: {};
};

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ChatTabs"
        screenOptions={{
          header: ({ route, navigation }) => (
            <Header navigation={navigation} route={route} />
          ),
        }}
      >
        <Stack.Screen name="ChatTabs" component={ChatTabs} />
        <Stack.Screen name="ChatDetails" component={ChatDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
