import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = num => {
    if (
      displayValue === '0' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '+'
    ) {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = op => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue(op.toString());
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result = 0;

    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
    }

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  const renderButton = (label, onPress, extraStyle, textStyle= {}) => (
    <TouchableOpacity style={[styles.button, extraStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>

      <View style={styles.row}>
        {renderButton('7', () => handleNumberInput(7))}
        {renderButton('8', () => handleNumberInput(8))}
        {renderButton('9', () => handleNumberInput(9))}
        {renderButton(
          '÷',
          () => handleOperatorInput('/'),
          styles.operatorButton,styles.textOrange
        )}
      </View>

      <View style={styles.row}>
        {renderButton('4', () => handleNumberInput(4))}
        {renderButton('5', () => handleNumberInput(5))}
        {renderButton('6', () => handleNumberInput(6))}
        {renderButton(
          '×',
          () => handleOperatorInput('*'),
          styles.operatorButton,styles.textOrange
        )}
      </View>

      <View style={styles.row}>
        {renderButton('1', () => handleNumberInput(1))}
        {renderButton('2', () => handleNumberInput(2))}
        {renderButton('3', () => handleNumberInput(3))}
        {renderButton(
          '-',
          () => handleOperatorInput('-'),
          styles.operatorButton,styles.textOrange
        )}
      </View>

      <View style={styles.row}>
        {renderButton('0', () => handleNumberInput(0), styles.zeroButton)}
        {renderButton(
          '+',
          () => handleOperatorInput('+'),
          styles.operatorButton,styles.textOrange
        )}
        {renderButton('=', handleEqual, styles.equalButton,styles.textWhite)}
      </View>

      <View style={styles.row}>
        {renderButton('C', handleClear, styles.clearButton)}
      </View>
    </View>
  );
};

export default Calculator;
