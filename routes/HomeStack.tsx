import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Chats from "../screens/Chats";


export type RootStackParamList = {
  Chats: {};
  ChatDetails: {};
};
const RootStack = createStackNavigator<RootStackParamList>();
const HomeStack = () => {
  return (
      <RootStack.Navigator initialRouteName="Chats">
        <RootStack.Screen
          name="Chats"
          component={Chats}
          options={{headerShown: false}}
        />
        {/* <RootStack.Screen name="Chat" component={Chat}/> */}
      </RootStack.Navigator>
  );
};

export default HomeStack;
