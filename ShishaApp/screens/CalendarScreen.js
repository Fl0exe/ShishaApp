// CalendarScreen.js
import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {globalStyles} from '../globalStyles';

const CalendarScreen = () => {
  const styles = globalStyles(useColorScheme());

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.primaryText}>Calendar Screen</Text>
    </View>
  );
};

export default CalendarScreen;
