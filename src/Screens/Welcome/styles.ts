import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#eb1800',
  },
  mainContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: 500,
    textAlign: 'center',
    marginHorizontal: 55,
    marginTop: 48,
  },
  image: {
    width: 320,
    height: 320,
    marginHorizontal: 35,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 48,
    marginHorizontal: 35,
  },
});
