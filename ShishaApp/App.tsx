// App.js
import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock, faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import CalendarScreen from './screens/CalendarScreen';
import NextEventScreen from './screens/NextEventScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';
import {globalStyles} from './globalStyles';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Calendar');

  const styles = globalStyles(useColorScheme());

  const renderPage = (pageName: string) => {
    switch (pageName) {
      case 'Calendar':
        return <CalendarScreen />;
      case 'Next Event':
        return <NextEventScreen />;
      case 'Test':
        return <PlaceholderScreen />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaTop} />

      <View style={styles.container}>{renderPage(currentPage)}</View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => setCurrentPage('Calendar')}
          style={styles.navbarItemContainer}>
          <FontAwesomeIcon icon={faCalendarDay} style={styles.navbarIcon} />
          <Text
            style={[
              styles.navbarText,
              currentPage === 'Calendar' && styles.highlight,
            ]}>
            Kalender
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage('Next Event')}
          style={styles.navbarItemContainer}>
          <FontAwesomeIcon icon={faClock} style={styles.navbarIcon} />
          <Text
            style={[
              styles.navbarText,
              styles.primaryText,
              currentPage === 'Next Event' && styles.highlight,
            ]}>
            Nächstes Event
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage('Test')}
          style={styles.navbarItemContainer}>
          <FontAwesomeIcon icon={faCalendarDay} style={styles.navbarIcon} />
          <Text
            style={[
              styles.navbarText,
              styles.primaryText,
              currentPage === 'Test' && styles.highlight,
            ]}>
            Test
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.safeAreaBottom} />
    </Fragment>
  );
};

export default App;
