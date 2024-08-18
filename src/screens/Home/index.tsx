import {useRef} from 'react';
import {
  Animated,
  FlatList,
  ImageBackground,
  Platform,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {DATA, HEIGHT} from '../../utils/constants';
import styles from './styles';
import Header from '../../components/Header';

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerBackground = scrollY.interpolate({
    inputRange: [HEIGHT * 0.2, HEIGHT * 0.25], // Change this value based on your needs
    outputRange: ['rgba(255, 255, 255,0)', '#FFFFFF'],
    extrapolate: 'clamp',
  });
  const headerTitle = scrollY.interpolate({
    inputRange: [HEIGHT * 0.2, HEIGHT * 0.25], // Change this value based on your needs
    outputRange: ['rgba(255, 255, 255, 0)', '#000000'],
    extrapolate: 'clamp',
  });

  const handleAnimatedScrolling = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );
  const TopSection = () => {
    return (
      <>
        <ImageBackground
          source={{
            uri: 'https://i.postimg.cc/wjgTBcyR/530031693-furniture-gateway-ss-07.jpg',
          }}
          style={styles.image}></ImageBackground>
        <Text style={styles.title}>Unique and Modern Furniture</Text>
        <Text style={styles.desc}>
          Our collection features furniture that combines contemporary design
          with timeless elegance, offering both style and functionality. Each
          piece is thoughtfully crafted to enhance your living space with
          sophistication and comfort.
        </Text>
        <Text style={styles.listTitle}>Key Features:</Text>
      </>
    );
  };
  return (
    <>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={'rgba(255, 255, 255, 0)'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <View style={styles.header}>
        <Header
          title={'Unique and Modern Furniture'}
          titleColor={headerTitle}
          style={[
            {
              backgroundColor: headerBackground,
              paddingTop:
                Platform.OS === 'android' ? StatusBar.currentHeight : 20,
            },
          ]}
        />
      </View>
      <FlatList
        ListFooterComponent={() => <View style={{height: HEIGHT * 0.1}} />}
        onScroll={event => {
          handleAnimatedScrolling(event);
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<TopSection />}
        data={DATA}
        renderItem={({item, index}) => (
          <Text style={styles.list}>
            <Text style={[styles.list, {fontWeight: 'bold'}]}>
              {index + 1}.
            </Text>{' '}
            {item.label}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default Home;
