import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity as T,
} from "react-native";
import { globalStyle } from "../styles/global";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/homeStack";

type Props = {
  chatData: ChatData;
  navigation: StackNavigationProp<RootStackParamList, any, any>;
};

export const Chat = ({ chatData, navigation }: Props) => {
  const goToChatDetails = () => {
    navigation.navigate("ChatDetails", {});
  };

  return (
    <View style={styles.chat}>
      <Image style={styles.chatImage} source={chatData.chatImage} />
      <T onPress={goToChatDetails} style={styles.content}>
        <View>
          <Text style={styles.chatName}>{chatData.chatName}</Text>
          <Text>
            {chatData.lastMessage.sender}: {chatData.lastMessage.text}
          </Text>
        </View>
        <Text style={styles.sendTime}>{chatData.lastMessage.sendTime}</Text>
      </T>
    </View>
  );
};

export type ChatData = {
  key: number;
  type: string;
  chatName: string;
  chatImage: any;
  lastMessage: {
    text: string;
    sender: string;
    sendTime: string;
  };
};

const styles = StyleSheet.create({
  chat: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    width: "78%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 998,
  },
  sendTime: {
    textAlignVertical: "top",
    fontSize: 10,
  },
});
