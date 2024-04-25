import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch as PaperSwitch } from 'react-native-paper';
import { PreferencesContext } from '../theme/preferencesContext'; 

const MyComponentWithTheme = () => {
  const { isThemeDark, toggleTheme } = useContext(PreferencesContext);
  const [isSwitchOn, setIsSwitchOn] = React.useState(isThemeDark);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    toggleTheme(); // Toggle the theme when the switch is toggled
  };

  const themeTextStyle = {
    color: isThemeDark ? '#ffffff' : '#21222c',
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.themeText, themeTextStyle]}>
        {isThemeDark ? 'Dark' : 'Light'}
      </Text>
      <PaperSwitch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default MyComponentWithTheme;