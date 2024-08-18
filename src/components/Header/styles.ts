import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    height: HEIGHT * 0.1,
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    columnGap: 10,
  },
  iconContainer: {
    borderRadius: 100,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {fontWeight: '700', fontSize: 17},
});
export default styles;
