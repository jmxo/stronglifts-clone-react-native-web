import {observer} from "mobx-react-lite";
import React from "react";
import {StyleSheet, View} from "react-native";
import {Routes} from "./Routes";

export const App = observer(() => {
  return (
    <View data-id="container" style={styles.container}>
      <View style={styles.wrapper}>
        <Routes />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: 425,
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
