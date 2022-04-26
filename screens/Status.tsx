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
  status: StatusData;
  navigation: StackNavigationProp<RootStackParamList, any, any>;
};

export const Status = ({ status, navigation }: Props) => {
  const goToStatusDetails = () => {
  };

  return (
    <View style={styles.chat}>
      <Image style={styles.statusImage} source={status.statusImage} />
      <T onPress={goToStatusDetails} style={styles.content}>
        <View>
          <Text style={styles.chatName}>{status.author}</Text>
          <Text>
            {status.time}
          </Text>
        </View>
      </T>
    </View>
  );
};

export type StatusData = {
  key: number;
  type: string;
  author: string;
  statusImage: any;
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
  statusImage: {
    width: 50,
    height: 50,
    borderRadius: 998,
  },
  sendTime: {
    textAlignVertical: "top",
    fontSize: 10,
  },
});
