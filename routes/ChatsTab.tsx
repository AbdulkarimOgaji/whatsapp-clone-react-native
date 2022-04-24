import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Chats } from "../screens";
import { MaterialIcons } from "@expo/vector-icons"


const Tab = createMaterialTopTabNavigator();

const ChatTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#128C7E",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#eee",
        tabBarPressColor: "#bbb",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height: 4,
          borderRadius: 5,
        },
        tabBarContentContainerStyle: {
          paddingStart: 20
        },
        tabBarLabelStyle: { fontWeight: "bold", position: 'relative' },
      }}
    >
      <Tab.Screen name="Chats" component={Chats} 
      options={{
        tabBarIcon: () => <MaterialIcons name="photo-camera" size={25} color="#ddd" />,
        tabBarIconStyle: {
          position: 'absolute',
          left: -60,
          top: 6,

        }
      }}
      />
      <Tab.Screen name="Status" component={Chats} />
      <Tab.Screen name="Calls" component={Chats} />
    </Tab.Navigator>
  );
};

export default ChatTabs;
