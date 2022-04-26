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
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  callData: CallData;
  navigation: StackNavigationProp<RootStackParamList, any, any>;
};

export const Call = ({ callData, navigation }: Props) => {
  const goToChatDetails = () => {};

  return (
    <View style={styles.chat}>
      <Image style={styles.chatImage} source={callData.callerImage} />
      <T onPress={goToChatDetails} style={styles.content}>
        <View>
          <Text style={styles.chatName}>{callData.caller}</Text>
          <Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
            {callData.type === "SENDER" ? (
              <MaterialIcons name="call-made" size={20} style={{marginRight: 10}} color={callData.status === 'MISSED' ? 'red': 'green'}/>
            ) : (
              <MaterialIcons name="call-received" size={20} style={{marginRight: 10}} color={callData.status === 'MISSED' ? 'red': 'green'} />
            )}
            <Text>{callData.time}</Text>
            </View>
            
          </Text>
        </View>
        <MaterialIcons name="local-phone" size={22} style={styles.phoneIcon} />
      </T>
    </View>
  );
};

export type CallData = {
  key: number;
  status: string;
  type: string;
  caller: string;
  callerImage: any;
  time: string;
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
  phoneIcon: {
    color: "green",
    marginTop: 10,
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
