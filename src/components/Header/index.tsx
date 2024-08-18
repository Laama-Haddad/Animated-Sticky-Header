import {Animated, Pressable, Text, View} from 'react-native';
import styles from './styles';
import ShareSVG from '../../resources/assets/svg/share.svg';
import SearchSVG from '../../resources/assets/svg/search.svg';
import {tHeaderProps} from '../../resources/types/components/tHeaderProps';
const AnimatedText = Animated.createAnimatedComponent(Text);
const Header = ({
  title,
  titleColor,
  titleStyle,
  onShareIconPress,
  onSearchIconPress,
  style,
}: tHeaderProps) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <AnimatedText
        style={[
          styles.title,
          {
            color: titleColor,
          },
          titleStyle,
        ]}>
        {title}
      </AnimatedText>
      <View style={styles.rightContainer}>
        <Pressable onPress={onShareIconPress} style={styles.iconContainer}>
          <ShareSVG width={21} height={21} />
        </Pressable>
        <Pressable onPress={onSearchIconPress} style={styles.iconContainer}>
          <SearchSVG width={21} height={21} />
        </Pressable>
      </View>
    </Animated.View>
  );
};
export default Header;
