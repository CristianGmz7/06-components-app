import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { View, Text, Alert, Button } from 'react-native';

const AlertsScreen = () => {

  //el alert recibe objetos en un arreglo de las opciones

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', 
        onPress: () => console.log('OK Pressed')
      },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', 
        onPress: () => console.log('OK Pressed')
      },
    ]);

  return (
    <ThemedView margin className='flex gap-4'>
      <ThemedButton onPress={createTwoButtonAlert} >
        2-Button Alert
      </ThemedButton>
      <ThemedButton onPress={createThreeButtonAlert} >
        3-Button Alert
      </ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
