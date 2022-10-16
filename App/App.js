import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.items}>
        <MCIcons name="history" size={25} color="white" />
        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={styles.items}>
        <AntDesign name="appstore-o" size={25} color="white" />
        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={styles.items}>
        <AntDesign name="bars" size={25} color="white" />
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#292828",
    // alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  items: {
    marginLeft: 30,
    marginTop: 10,
  },
});
