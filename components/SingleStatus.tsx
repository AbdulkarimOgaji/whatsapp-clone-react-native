import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity as T,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusType } from '../screens/Statuses'

type Props = {
  status: StatusType;
  navigation: StackNavigationProp<any, any, any>;
};

const SingleStatus = ({ status, navigation }: Props) => {
  const goToStatusDetails = () => {
  };

  return (
    <View style={styles.container}>
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

export default SingleStatus;


const styles = StyleSheet.create({
  container: {
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
