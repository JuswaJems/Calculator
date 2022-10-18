import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import _ from "lodash";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;
export default function App() {
  const [state, setState] = useState("");

  function handleClick(e) {
    let value = state.concat(e);
    setState(value);
    console.log(value);
  }
  return (
    <SafeAreaView style={styles.dashboard}>
      <View style={styles.row}>
        {/* <StatusBar style="auto" /> */}
        <MCIcons style={styles.items} name="history" size={25} color="white" />
        <AntDesign
          style={styles.items}
          name="appstore-o"
          size={25}
          color="white"
        />
        <AntDesign style={styles.items} name="bars" size={25} color="white" />
      </View>
      <View style={styles.row1}>
        <Text style={styles.value}>{state}</Text>
      </View>
      <View style={styles.row2}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* 1st Row */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setState("");
            }}
          >
            <Text style={styles.text}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleClick("%");
            }}
            style={styles.button}
          >
            <Text style={styles.text}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Feather name="delete" style={styles.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.operations}>
            <Feather name="divide" style={styles.text} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* 2nd Row */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("7");
            }}
          >
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("8");
            }}
          >
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("9");
            }}
          >
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operations}>
            <Text style={styles.text}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* 2nd Row */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("4");
            }}
          >
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("5");
            }}
          >
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("6");
            }}
          >
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operations}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* 2nd Row */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("1");
            }}
          >
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("2");
            }}
          >
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("3");
            }}
          >
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operations}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* 2nd Row */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick("0");
            }}
          >
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleClick(".");
            }}
          >
            <Text style={styles.text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.operations, backgroundColor: "#3768b8" }}
          >
            <Text style={styles.text}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#292828",
    // alignItems: "flex-end",
    // justifyContent: "flex-end",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "flex-end",
  },
  row1: {
    flex: 2,
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  row2: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "#000",
    marginTop: 10,
    width: "100%",
    alignContent: "flex-end",
    alignItems: "stretch",
  },
  items: {
    marginLeft: 10,
    marginRight: 20,
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
  button: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  operations: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
    marginTop: 15,
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
