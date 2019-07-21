import {observer} from "mobx-react-lite";
import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Card} from "./Card";

interface Props {
  exercise: string;
  repsAndWeight: string;
  sets: string[];
  onSetPress: (index: number) => void;
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  topRowText: {
    fontSize: 16,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#8FB299",
  },
  circleText: {
    fontSize: 16,
    margin: "auto",
  },
  whiteText: {
    color: "#FFF",
  },
  grayText: {
    color: "#655252",
  },
  fadedBackground: {
    backgroundColor: "#B2A1A1",
  },
});

export const WorkoutCard: React.FC<Props> = observer(
  ({exercise, repsAndWeight, sets, onSetPress}) => {
    return (
      <View style={styles.cardContainer}>
        <Card>
          <View style={styles.topRow}>
            <Text style={styles.topRowText}>{exercise}</Text>
            <Text style={styles.topRowText}>{repsAndWeight}</Text>
          </View>
          <View style={styles.bottomRow}>
            {sets.map((set, index) => {
              if (set === "x") {
                return (
                  <View
                    style={[styles.circle, styles.fadedBackground]}
                    key={set + index}
                  >
                    <Text style={[styles.circleText, styles.grayText]}>
                      &times;
                    </Text>
                  </View>
                );
              }

              if (set === "") {
                return (
                  <TouchableOpacity
                    onPress={() => onSetPress(index)}
                    style={[styles.circle, styles.fadedBackground]}
                    key={set + index}
                  />
                );
              }

              return (
                <TouchableOpacity
                  onPress={() => onSetPress(index)}
                  style={styles.circle}
                  key={set + index}
                >
                  <Text style={[styles.circleText, styles.whiteText]}>
                    {set}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Card>
      </View>
    );
  },
);
