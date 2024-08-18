import {StyleProp} from 'react-native';
export type tHeaderProps = {
  title?: string;
  titleColor?: any;
  titleStyle?: StyleProp<any> | StyleProp<any>[];
  onShareIconPress?: () => void;
  onSearchIconPress?: () => void;
  style?: StyleProp<any> | StyleProp<any>[];
};
