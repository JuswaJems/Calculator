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
const initialState = {
  currentValue: "",
  previousValue: null,
  operator: null,
};
export default function App() {
  const [state, setState] = useState(initialState);
  const [display, setDisplay] = useState({ currentDisplay: "", result: "" });

  function handleNumbers(e) {
    setDisplay({
      ...display,
      currentDisplay: display?.currentDisplay?.concat(e),
    });
    setState({ ...state, currentValue: state?.currentValue?.concat(e) });
  }
  function handleOperations(e) {
    if (state?.operator || e === "=") {
      let result = 0;
      if (state?.operator === "÷") {
        result =
          parseFloat(state?.previousValue) / parseFloat(state?.currentValue);
        setDisplay({
          ...display,
          currentDisplay: result + " " + e,
          result: result,
        });
      }
      if (state?.operator === "x") {
        result =
          parseFloat(state?.previousValue) * parseFloat(state?.currentValue);
        setDisplay({
          ...display,
          currentDisplay: result + " " + e,
          result: result,
        });
      }
      if (state?.operator === "-") {
        result =
          parseFloat(state?.previousValue) - parseFloat(state?.currentValue);
        setDisplay({
          ...display,
          currentDisplay: result + " " + e,
          result: result,
        });
      }
      if (state?.operator === "+") {
        result =
          parseFloat(state?.previousValue) + parseFloat(state?.currentValue);
        setDisplay({
          ...display,
          currentDisplay: result + " " + e,
          result: result,
        });
      }
      setState({
        ...state,
        currentValue: "",
        previousValue: result,
        operator: e,
      });
    } else {
      setDisplay({
        ...display,
        currentDisplay: display?.currentDisplay?.concat(" " + e + " "),
      });
      setState({
        ...state,
        currentValue: "",
        previousValue: state?.currentValue,
        operator: e,
      });
    }
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
        <Text style={styles.value}>{display?.currentDisplay}</Text>
      </View>
      <View style={styles.row2}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* 1st Row */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setDisplay({
                ...display,
                currentDisplay: "",
                result: "",
              });
              setState({
                ...state,
                currentValue: "",
                previousValue: "",
                operator: "",
              });
            }}
          >
            <Text style={styles.text}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleNumbers("%");
            }}
            style={styles.button}
          >
            <Text style={styles.text}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Feather name="delete" style={styles.text} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleOperations("÷");
            }}
            style={styles.operations}
          >
            <Feather name="divide" style={styles.text} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* 2nd Row */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers("7");
            }}
          >
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers("8");
            }}
          >
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers("9");
            }}
          >
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operations}
            onPress={() => {
              handleOperations("x");
            }}
          >
            <Text style={styles.text}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* 2nd Row */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers("4");
            }}
          >
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers("5");
            }}
          >
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers("6");
            }}
          >
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operations}
            onPress={() => {
              handleOperations("-");
            }}
          >
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* 2nd Row */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers("1");
            }}
          >
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers("2");
            }}
          >
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers("3");
            }}
          >
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operations}
            onPress={() => {
              handleOperations("+");
            }}
          >
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
              handleNumbers("0");
            }}
          >
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNumbers(".");
            }}
          >
            <Text style={styles.text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.operations, backgroundColor: "#3768b8" }}
            onPress={() => {
              handleOperations("=");
            }}
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
