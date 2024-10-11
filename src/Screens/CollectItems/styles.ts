import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#1a0901',
  },
  mainContainer: {
    marginHorizontal: 24,
    marginTop: 31,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: 'medium',
    marginTop: 24,
  },
  listContainer: {
    borderRadius: 12,
    marginTop: 22,
    marginHorizontal: 24,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  list: {
    marginVertical: 12,
    marginHorizontal: 22,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#1a0901',
    borderRadius: 16,
  },
  row: {
    gap: 1,
    marginVertical: 0.5,
  },
  item: {
    width: 70,
    height: 70,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
});
