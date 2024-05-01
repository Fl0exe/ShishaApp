// globalStyles.js
import {Platform, StyleSheet} from 'react-native';

const primaryColor = '#02ed20';
const navbarColorLight = '#dddddd';
const navbarColorDark = '#222222';
const primaryBackgroundColorLight = '#ffffff';
const primaryBackgroundColorDark = '#000000';
const primaryFontColorLight = '#000000';
const primaryFontColorDark = '#ffffff';

export const globalStyles = colorScheme => {
  return StyleSheet.create({
    safeAreaTop: {
      flex: Platform.OS === 'android' ? 0.03 : 0,
      backgroundColor:
        colorScheme === 'dark'
          ? primaryBackgroundColorDark
          : primaryBackgroundColorLight,
    },
    safeAreaBottom: {
      flex: Platform.OS === 'android' ? 0.03 : 0,
      backgroundColor:
        colorScheme === 'dark' ? navbarColorDark : navbarColorLight,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        colorScheme === 'dark'
          ? primaryBackgroundColorDark
          : primaryBackgroundColorLight,
    },
    navbarText: {
      marginTop: 10,
      fontSize: 15,
      textAlign: 'center',
      color:
        colorScheme === 'dark' ? primaryFontColorDark : primaryFontColorLight,
    },
    primaryText: {
      color:
        colorScheme === 'dark' ? primaryFontColorDark : primaryFontColorLight,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor:
        colorScheme === 'dark' ? navbarColorDark : navbarColorLight,
    },
    navbarItemContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '30%',
      padding: 10,
    },
    navbarIcon: {
      color:
        colorScheme === 'dark' ? primaryFontColorDark : primaryFontColorLight,
    },
    highlight: {
      color: primaryColor,
    },
  });
};
