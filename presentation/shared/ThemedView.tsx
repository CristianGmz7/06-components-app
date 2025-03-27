import { useThemeColor } from '@/hooks/useThemeColor';
import { StatusBar, View, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;      //por si se aplica un margen
  safe?: boolean;        //aplicarle margen de separacion de arriba, mas que todo solo para el View superior
  bgColor?: string;
}

//Trabajar el tema con los styles y hooks

const ThemedView = ({className, margin = false, safe = false, bgColor, style, children}: Props) => {

  const safeArea = useSafeAreaInsets();
  const defaultBgColor = useThemeColor({}, "background");

  const backgroundColor = bgColor ?? defaultBgColor   //asegurarse que siempre haya un bgColor

  return (
    // AQUI SE PASO UN STYLE DEL VIEW Y UN CLASSNAME DE TAILWIND
    <View
      style={[
        {
        backgroundColor: backgroundColor,
        // safeArea.top solo funca en iphone
        paddingTop: safe ? (safeArea.top || StatusBar.currentHeight || 0) : 0,
        marginHorizontal: margin ? 10 : 0,
        
        },
        style
      ]}
      className={className}
    >
      {children}
    </View>
  )
}

export default ThemedView