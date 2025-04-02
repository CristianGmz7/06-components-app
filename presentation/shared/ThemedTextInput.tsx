import { TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
    className?: string;
}

const ThemedTextInput = ({className, ...rest} : Props) => {
  return (
    <TextInput
        className={[
            className,
            "py-4 px-2 text-black dark:text-white"
        ].join(" ")}
        placeholderTextColor={"gray"}
        {...rest}       //todas las siguientes propiedades se propagan
        //   value={form.name}
        //   onChangeText={(value) => setForm({ ...form, name: value })}
        //   placeholder="Nombre completo"
        //   autoCapitalize="words"
    />
  );
};

export default ThemedTextInput;
