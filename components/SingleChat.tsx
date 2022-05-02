import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity as T,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ChatType } from '../screens/Chats'
import { RootStackParamList } from "../routes/ContainerStack";
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library';

type Props = {
  chatData: ChatType;
  navigation: StackNavigationProp<RootStackParamList, any, any>;
};

// const getFileFromPhone = async() => {
//   console.log(FileSystem.documentDirectory);
//   const dir = FileSystem.documentDirectory + "TextFile.txt"
//   const res = await FileSystem.getInfoAsync(dir, {md5: true, size: true})
//   console.log(res);
// }

// const saveFileToPhone = async() => {
//   const status = await MediaLibrary.requestPermissionsAsync()
//   if (status.granted) {
//     const cwd = FileSystem.documentDirectory
//     const saveFile = cwd + "TestFile.txt"
//     const saveFile2 = cwd + "TestFile2.txt"

//     await FileSystem.writeAsStringAsync(saveFile, "This is the test file", { encoding: FileSystem.EncodingType.UTF8 })
//     await FileSystem.writeAsStringAsync(saveFile2, "This is the test file", { encoding: FileSystem.EncodingType.UTF8 })
//     console.log("Writing file")
//     const asset = await MediaLibrary.createAssetAsync(saveFile)
//     const asset2 = await MediaLibrary.createAssetAsync(saveFile2)
//     await MediaLibrary.createAlbumAsync("myDownloads", asset, false)
//     await MediaLibrary.createAlbumAsync("myDownloads", asset2, false)
//   }
  
// }

const SingleChat = ({ chatData, navigation }: Props) => {
  const goToChatDetails = () => {
    navigation.navigate("ChatDetails", { chatName: chatData.chatName});
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

export default SingleChat;
