import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";

import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar, Text, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import ThemedView from '@/presentation/shared/ThemedView';
// import ThemedText from '@/presentation/shared/ThemedText';
import { allRoutes } from '@/constants/Routes';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // console.log(colorScheme);    //dark o light

  //{} se obtienen los que vienen por defecto
  const backgroundColor = useThemeColor({}, "background");

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: backgroundColor }}>
      <StatusBar 
        backgroundColor={backgroundColor}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        translucent={false}
      />
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <ThemedView margin safe bgColor='indigo'>
          <ThemedText type='h2' className='mt-10' numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit placeat aut enim iusto quam laborum perferendis consectetur soluta temporibus reiciendis odit sunt commodi molestias quidem, ex harum! Et, assumenda.
          </ThemedText>
        </ThemedView> */}

        <Stack screenOptions={{
          headerShown: true,
          headerShadowVisible: false,
          contentStyle: {backgroundColor},
          headerStyle: {backgroundColor}
        }}>
          {/* mapear las rutas */}
          {
            allRoutes.map((route) => (
              <Stack.Screen 
                key={route.name}
                name={route.name}
                options={{
                  title: route.title
                }}
              />
            ))
          }
        </Stack>
        
      </ThemeProvider>

    </GestureHandlerRootView>
  );
}