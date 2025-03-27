import { useRef } from "react";
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    //valor de referencia para la opacidad
    const animatedOpacity = useRef(new Animated.Value(0)).current;

    //valor de referencia para efecto de caida
    const animatedTop = useRef(new Animated.Value(-100)).current;
    //se coloca en -100 (-100 po)

    const fadeIn = ({
        duration = 300,
        toValue = 1,
        useNativeDriver = true,
        callback = () => {},
    }) => {
        Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,    //en milisegundos
        useNativeDriver: useNativeDriver   //usar la version grafica del dispositivo
        }).start(callback);
    }

    const fadeOut = ({
        duration = 300,
        toValue = 0,
        useNativeDriver = true,
        callback = () => {},
        easing = Easing.ease
    }) => {
        Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,    //en milisegundos
        useNativeDriver: useNativeDriver,   //usar la version grafica del dispositivo
        easing: easing
        // }).start(() => animatedTop.setValue(-100));
        // }).start(() => animatedTop.resetAnimation);
    }).start(callback);

    
        //efecto de caida
        // Animated.timing(animatedTop, {
        // toValue: -100,
        // duration: 300,
        // useNativeDriver: true
        // }).start();
    }

  const startMovingTopPosition = ({
    duration = 700,
    toValue = 0,
    initialPosition = -100,
    useNativeDriver = true,
    callback = () => {},
    easing = Easing.linear
  }) => {
    //efecto de caida

        animatedTop.setValue(initialPosition);

        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
                                        // easing: Easing.elastic(2),   //es un efecto rebote que da
            easing: easing,             //Easing.bounce        

        }).start();
    }

    return {
        animatedOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTopPosition
    }
}