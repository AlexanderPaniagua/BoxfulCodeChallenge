import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme/colors';
import { FloatingImage } from '../../components/animations/FloatingImage';
import LogoWhite from '../../assets/svg/logo_white.svg';
import LoopSvg from '../../assets/svg/loop.svg';
import LoopBlurSvg from '../../assets/svg/loop_blur.svg';
import LoopTailSvg from '../../assets/svg/loop_tail.svg';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

type LoopPosition = 'left' | 'center' | 'right';
type LoopType = 'normal' | 'blur' | 'tail';

interface LoopConfig {
  position: LoopPosition;
  type: LoopType;
}

const onboardingData = [
  {
    id: '1',
    title: 'Programa entregas hasta',
    highlight: '15 días de anticipación',
    loop: { position: 'left' as LoopPosition, type: 'normal' as LoopType },
    images: [
      {
        source: require('../../assets/images/onboarding/products/shoe.png'),
        width: 250,
        height: 175,
        style: { top: 30, left: 10 },
        delay: 0,
        floatRange: 12,
        rotateRange: 4,
      },
      {
        source: require('../../assets/images/onboarding/products/moneyface.png'),
        width: 110,
        height: 110,
        style: { top: 160, right: 75 },
        delay: 300,
        floatRange: 8,
        rotateRange: 5,
      },
      {
        source: require('../../assets/images/onboarding/products/thumbler.png'),
        width: 325,
        height: 350,
        style: { top: 200, left: 10 },
        delay: 600,
        floatRange: 10,
        rotateRange: 3,
      },
    ],
  },
  {
    id: '2',
    title: 'Programa entregas hasta',
    highlight: '15 días de anticipación',
    loop: { position: 'center' as LoopPosition, type: 'blur' as LoopType },
    images: [
      {
        source: require('../../assets/images/onboarding/providers/forza.png'),
        width: 200,
        height: 200,
        style: { top: 20, left: 10 },
        delay: 0,
        floatRange: 10,
        rotateRange: 4,
      },
      {
        source: require('../../assets/images/onboarding/providers/cointraxpress.png'),
        width: 200,
        height: 200,
        style: { top: 0, right: 10 },
        delay: 200,
        floatRange: 12,
        rotateRange: 5,
      },
      {
        source: require('../../assets/images/onboarding/providers/rapiurban.png'),
        width: 135,
        height: 135,
        style: { top: 275, left: 20 },
        delay: 400,
        floatRange: 8,
        rotateRange: 3,
      },
      {
        source: require('../../assets/images/onboarding/providers/c807xpress.png'),
        width: 240,
        height: 240,
        style: { top: 170, left: 110 },
        delay: 300,
        floatRange: 11,
        rotateRange: 4,
      },
      {
        source: require('../../assets/images/onboarding/providers/fourbox.png'),
        width: 200,
        height: 200,
        style: { top: 150, right: -15 },
        delay: 500,
        floatRange: 9,
        rotateRange: 5,
      },
      {
        source: require('../../assets/images/onboarding/providers/aeroflash.png'),
        width: 300,
        height: 300,
        style: { top: 275, right: -10 },
        delay: 100,
        floatRange: 10,
        rotateRange: 3,
      },
    ],
  },
  {
    id: '3',
    title: 'Programa entregas hasta',
    highlight: '15 días de anticipación',
    loop: { position: 'right' as LoopPosition, type: 'tail' as LoopType },
    images: [
      {
        source: require('../../assets/images/onboarding/secure.png'),
        width: 120,
        height: 120,
        style: { top: 40, left: -1 },
        delay: 0,
        floatRange: 10,
        rotateRange: 6,
      },
      {
        source: require('../../assets/images/onboarding/yellow_arrows.png'),
        width: 120,
        height: 120,
        style: { top: 15, right: 15 },
        delay: 200,
        floatRange: 12,
        rotateRange: 4,
      },
      {
        source: require('../../assets/images/onboarding/get_ship_done.png'),
        width: 190,
        height: 190,
        style: { top: 190, left: 100 },
        delay: 400,
        floatRange: 8,
        rotateRange: 5,
      },
      {
        source: require('../../assets/images/onboarding/green_arrows.png'),
        width: 100,
        height: 100,
        style: { top: 200, right: 0 },
        delay: 300,
        floatRange: 11,
        rotateRange: 3,
      },
      {
        source: require('../../assets/images/onboarding/simple_logistic.png'),
        width: 190,
        height: 150,
        style: { top: 360, left: 50 },
        delay: 500,
        floatRange: 9,
        rotateRange: 4,
      },
    ],
  },
];

function getLoopPositionStyle(position: LoopPosition) {
  const baseStyle = {
    position: 'absolute' as const,
    bottom: 0,
  };

  switch (position) {
    case 'left':
      return { ...baseStyle, left: -SCREEN_WIDTH * 0.20 };
    case 'center':
      return { ...baseStyle, left: 0 };
    case 'right':
      return { ...baseStyle, right: -SCREEN_WIDTH * 0.20 };
    default:
      return baseStyle;
  }
}

interface OnboardingSlideProps {
  title: string;
  highlight: string;
  loop: LoopConfig;
  images: Array<{
    source: any;
    width: number;
    height: number;
    style: object;
    delay: number;
    floatRange: number;
    rotateRange: number;
  }>;
}

function OnboardingSlide({ title, highlight, loop, images }: OnboardingSlideProps) {
  const getLoopComponent = () => {
    switch (loop.type) {
      case 'blur':
        return LoopBlurSvg;
      case 'tail':
        return LoopTailSvg;
      default:
        return LoopSvg;
    }
  };
  const LoopComponent = getLoopComponent();
  const loopPositionStyle = getLoopPositionStyle(loop.position);

  return (
    <View style={styles.slide}>
      <View style={[styles.loopWrapper, loopPositionStyle]} pointerEvents="none">
        <LoopComponent
          width={SCREEN_WIDTH * 1.2}
          height={SCREEN_HEIGHT * 0.75}
        />
      </View>

      <View style={styles.imagesContainer}>
        {images.map((img, index) => (
          <FloatingImage
            key={index}
            source={img.source}
            width={img.width}
            height={img.height}
            style={img.style}
            delay={img.delay}
            floatRange={img.floatRange}
            rotateRange={img.rotateRange}
          />
        ))}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.highlight}>{highlight}</Text>
      </View>
    </View>
  );
}

function PaginationDots({
  total,
  activeIndex,
}: {
  total: number;
  activeIndex: number;
}) {
  return (
    <View style={styles.pagination}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex ? styles.dotActive : styles.dotInactive,
          ]}
        />
      ))}
    </View>
  );
}

export function OnboardingScreen({ navigation }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SCREEN_WIDTH);
    if (index !== activeIndex && index >= 0 && index < onboardingData.length) {
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    if (activeIndex < onboardingData.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: (activeIndex + 1) * SCREEN_WIDTH,
        animated: true,
      });
    } else {
      navigation.replace('Auth');
    }
  };

  const handleSkip = () => {
    navigation.replace('AppTabs');
  };

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <LogoWhite width={140} height={40} />
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
        bounces={false}
        style={styles.scrollView}
      >
        {onboardingData.map((item) => (
          <OnboardingSlide
            key={item.id}
            title={item.title}
            highlight={item.highlight}
            loop={item.loop}
            images={item.images}
          />
        ))}
      </ScrollView>

      <PaginationDots total={onboardingData.length} activeIndex={activeIndex} />

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.skipAndNextButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Omitir</Text>
        </Pressable>

        <Pressable style={styles.skipAndNextButton} onPress={handleNext}>
          <Text style={styles.nextText}>
            {activeIndex === onboardingData.length - 1 ? 'Comenzar' : 'Siguiente'}
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width: SCREEN_WIDTH,
    flex: 1,
    paddingTop: 120,
    overflow: 'hidden',
  },
  loopWrapper: {
    zIndex: 0,
  },
  imagesContainer: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
  textContainer: {
    paddingHorizontal: 24,
    paddingBottom: 160,
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  highlight: {
    color: colors.lime,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    zIndex: 10,
  },
  dot: {
    width: 24,
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    backgroundColor: colors.lime,
  },
  dotInactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  skipAndNextButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  skipText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontWeight: '500',
  },
  nextText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontWeight: '500',
  },
});
