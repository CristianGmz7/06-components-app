import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition} = useAnimation()

  return (
    <ThemedView margin className='flex-1 items-center justify-center'>

      <Animated.View 
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl' 
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,    //comenzará en 0
          transform: [{translateY: animatedTop}]
        }}
      />

      <ThemedButton
        onPress={() => {
          fadeIn({}); 
          startMovingTopPosition({
             easing: Easing.bounce,
             duration: 300
          });
        }}
        className='my-6'
      >
        Fade In
      </ThemedButton>
      <ThemedButton
        onPress={() => fadeOut({})}
        className='my-6'
      >
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
