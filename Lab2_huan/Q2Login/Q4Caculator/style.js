import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 55,
    paddingBottom: 25,
    backgroundColor: '#f5f5f5',
  },
  display: {
    fontSize: 70,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#fff',
    width: 80,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  zeroButton: {
    width: 190,
    alignItems: 'center',
  },
  operatorButton: {
    backgroundColor: '#eee',
    color: 'orange',
  },
  equalButton: {
    backgroundColor: 'orange',
    color: 'white',
    width: 50,
  },
  clearButton: {
    backgroundColor: '#eee',
    width: '100%',
    borderRadius: 35,
    height: 60,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 500,
    
  },
  textWhite: {color: 'white'},
  textOrange: {color: 'orange'},
});

export default styles;
