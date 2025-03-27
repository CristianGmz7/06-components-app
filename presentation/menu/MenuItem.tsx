import { Href, router } from 'expo-router';
import { View, Text, Pressable } from 'react-native'
import ThemedText from '../shared/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;       //se convierte a un tipo de Icono de Ionicons porque no puede ser string
    name: string;
    isFirst?: boolean;
    isLast?: boolean;
}

//Todo lo que tenga que ver con computacion majnejarlo con el style
const MenuItem = ({title, icon, name, isFirst = false, isLast = false}: Props) => {

    //lo que interesa es extraer el color sin mandar nada
    const primaryColor = useThemeColor({}, 'primary')

    //se desestructura el primer elemento, esto podria llamarse en la parte del .push
    // const [routeName] = name.split('/');

  return (
    <Pressable
        onPress={() => router.push(name.split("/")[0] as Href)}      // se quita la pleca debido a que en el archivo Routes se tienen las rutas
        className="bg-white dark:bg-black/15 px-5 py-2"
        style={{
            //condicionar clases copiando el resto de estilos
            ...(isFirst && {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingTop: 10,
            }),
            ...(isLast && {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                paddingBottom: 10,
            }),
        }}
    >
        <View>
            <Ionicons name={icon} size={30} color={primaryColor} />
            <ThemedText type='h2' className='flex-row items-center gap-2'>
                {title}
            </ThemedText>
        </View>
    </Pressable>
  )
}

export default MenuItem