import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DaysOfWeek} from '../../models/CommonModels';
import {colors} from '../../styles/colors';

interface Day {
  value: DaysOfWeek;
  label: string;
}
const DAYS: Day[] = [
  {
    value: DaysOfWeek.Monday,
    label: 'Mon',
  },
  {
    value: DaysOfWeek.Tuesday,
    label: 'Tue',
  },
  {
    value: DaysOfWeek.Wednesday,
    label: 'Wed',
  },
  {
    value: DaysOfWeek.Thursday,
    label: 'Thu',
  },
  {
    value: DaysOfWeek.Friday,
    label: 'Fri',
  },
  {
    value: DaysOfWeek.Saturday,
    label: 'Sat',
  },
  {
    value: DaysOfWeek.Sunday,
    label: 'Sun',
  },
];

interface Props {
  days: DaysOfWeek[];
}
export function DaysOfWeekIndicator({days}: Props) {
  return (
    <View style={styles.container}>
      {DAYS.map(day => {
        const check = days.includes(day.value);
        return (
          <View
            key={day.value}
            style={[
              {
                backgroundColor: check ? colors.primary : colors.secondary,
              },
              styles.item,
            ]}>
            <Text style={styles.label}>{day.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: 300,
    justifyContent: 'space-between',
  },
  item: {
    borderRadius: 30,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.light,
    fontSize: 14,
  },
});
