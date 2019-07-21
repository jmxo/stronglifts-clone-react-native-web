import * as React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

interface Props {
  onPress: () => void;
}

const styles = StyleSheet.create({
  fab: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
    position: "absolute",
    bottom: 20,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 2,
  },
});

export const Fab: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};
