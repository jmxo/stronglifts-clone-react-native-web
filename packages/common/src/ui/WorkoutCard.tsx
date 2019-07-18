import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  exercise: string;
  repsAndWeight: string;
  sets: string[];
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    padding: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  topRowText: {
    fontSize: 16,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#8FB299',
  },
  circleText: {
    fontSize: 16,
    margin: 'auto',
  },
  whiteText: {
    color: '#FFF',
  },
  grayText: {
    color: '#655252',
  },
  fadedBackground: {
    backgroundColor: '#B2A1A1',
  },
});

export const WorkoutCard: React.FC<Props> = ({
  exercise,
  repsAndWeight,
  sets,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}>{exercise}</Text>
        <Text style={styles.topRowText}>{repsAndWeight}</Text>
      </View>
      <View style={styles.bottomRow}>
        {sets.map((set, index) => {
          if (set === 'x') {
            return (
              <View
                style={[styles.circle, styles.fadedBackground]}
                key={set + index}
              >
                <Text style={[styles.circleText, styles.grayText]}>X</Text>
              </View>
            );
          }

          if (set === '') {
            return (
              <View
                style={[styles.circle, styles.fadedBackground]}
                key={set + index}
              />
            );
          }

          return (
            <View style={styles.circle} key={set + index}>
              <Text style={[styles.circleText, styles.whiteText]}>{set}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
