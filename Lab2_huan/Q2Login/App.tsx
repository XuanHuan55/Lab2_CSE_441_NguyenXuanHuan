import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import LoginScreen from './Q2Login/Login';
import IncomeTaxCalculator from './Q3IncomTax/IncomeTax';
import Calculator from './Q4Caculator/Caculator';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen />;
      case 'tax':
        return <IncomeTaxCalculator />;
      case 'calculator':
        return <Calculator />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="Q2 - Login" onPress={() => setCurrentScreen('login')} />
        <Button title="Q3 - IncomeTax" onPress={() => setCurrentScreen('tax')} />
        <Button title="Q4 - caculator" onPress={() => setCurrentScreen('calculator')} />
      </View>
      <View style={styles.content}>{renderCurrentScreen()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  buttonRow: {
    marginTop: 50,
    flexDirection: 'row',
     justifyContent: 'space-around',
    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
});

export default App;
