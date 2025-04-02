// al final al aplicar modo claro y modo oscuro se tiene que crear en componentes todo

import { View, Text, SwitchProps, Pressable, Switch, Platform } from 'react-native'
import ThemedText from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props extends SwitchProps {
    className?: string;
    value?: boolean;
    text?: string;
    onValueChange?: (value: boolean) => void;       //recibe booleano pero no retorna nada
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({className, value, text, onValueChange}: Props) => {

    //en el objeto se pueden manipular
    const switchActiveColor = useThemeColor({}, "primary");
    
  return (
    <Pressable
        className={[
            className,
            "flex-row items-center justify-between active:opacity-80"
        ].join(" ")}
    >
        {/* condición que se hace para que se mantengan los valores en extremos del pressable */}
      {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
      <Switch
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{false: 'gray', true: switchActiveColor}}
        // ios_backgroundColor={value ? "green" : "red"}    //otra manera si se quisiera evaluar si fuese iphone
        value={value}
        onValueChange={onValueChange}
        
      />
    </Pressable>
  )
}

export default ThemedSwitch