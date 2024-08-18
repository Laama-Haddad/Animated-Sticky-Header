import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {},
  header:{
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    elevation: 5,
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.3,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: '5%',
    marginHorizontal: '5%',
    color: 'black',
  },
  desc: {
    fontWeight: '500',
    fontSize: 14,
    marginTop: '3%',
    marginHorizontal: '5%',
    color: '#343434',
  },
  listTitle: {
    fontWeight: '600',
    fontSize: 18,
    marginTop: '3%',
    marginHorizontal: '5%',
    color: '#000000',
  },
  list: {
    fontWeight: '400',
    fontSize: 15,
    marginTop: '3%',
    marginBottom: '2%',
    marginHorizontal: '5%',
    color: '#221122',
  },
});
export default styles;
