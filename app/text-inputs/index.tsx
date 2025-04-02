import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: ""
  });

  return (
    // COn esto se ajusta la altura del teclado en pantalla para iPhone
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
        <ThemedView>
          <ThemedCard className='mb-5'>
            <ThemedTextInput 
              value={form.name}
              onChangeText={value => setForm({...form, name: value})}
              placeholder='Nombre completo'
              autoCapitalize='words'
            />

            <ThemedTextInput 
              value={form.email}
              onChangeText={value => setForm({...form, email: value})}
              placeholder='Correo electronico'
              autoCapitalize='words'
              keyboardType='email-address'
            />

            <ThemedTextInput 
              value={form.phone}
              onChangeText={value => setForm({...form, phone: value})}
              placeholder='Telefono'
              autoCapitalize='words'
              keyboardType='phone-pad'
            />

          </ThemedCard>

          <ThemedCard className='mb-5'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-5'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-5'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-5'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-5'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedView>
            <ThemedTextInput 
              value={form.phone}
              onChangeText={value => setForm({...form, phone: value})}
              placeholder='Telefono'
              autoCapitalize='words'
              keyboardType='phone-pad'
            />
          </ThemedView>
        </ThemedView>

        {/* esto  en combinación del KeyboardAvoidingView es para iphone, para que inputs de finales se puedan levantar o queden sobre el teclado */}
        {isIOS && <View style={{
          height: 100
        }}/>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
