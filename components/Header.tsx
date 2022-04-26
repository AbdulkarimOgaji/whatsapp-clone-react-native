import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity as T,
} from "react-native";
import { NavigationProp, getPathFromState } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const currentPath = getPathFromState(navigation.getState());
  const showBack = ["/ChatDetails"];
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {showBack.includes(currentPath) ? (
        <Button title="Back" onPress={goBack} />
      ) : (
        <>
          <Text style={styles.headerText}>WhatsDown</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <T>
              <MaterialIcons name="search" color="#eee" size={28} style={{marginEnd: 25}} />
            </T>
            <T>
              <MaterialIcons name="more-vert" color="#eee" size={28} />
            </T>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#128C7E",
    height: 90,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
});
