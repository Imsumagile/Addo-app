// styles.tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  picContainer: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
  backImage: {
    width: 24,
    height: 24,
  },
  titles: {
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#185D7E',
  },
  sub: {
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#1c1f1e',
  },
  image: {
    marginTop: '10%',
    width: '95%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#185D7E',
    width: 343,
    height: 48,
    marginTop: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'auto',
    color: '#fff',
  },
  back: {
    width: '10%',
    height: '10%',
  },
});

export default styles;