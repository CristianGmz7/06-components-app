import { Text, TextProps } from 'react-native'

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "bold" | "link";

interface Props extends TextProps{
    className?: string;
    type?: TextType;
}

//el ...rest va al final
const ThemedText = ({ className, type, ...rest }: Props) => {
  return (
    <Text
        className={
            ['text-light-text dark:text-dark-text',
            type === "normal" && "font-normal",
            type === "h1" && "font-bold text-3xl",
            type === "h2" && "font-bold text-2xl",
            type === "semi-bold" && "font-semibold",
            type === "bold" && "font-bold",
            type === "link" && "underline",
            className                       //demas clases que se pasen
            ].join(" ")
        }     //se comportará segun el tipo
        {...rest}
    >
        {rest.children}
    </Text>
  )
}

export default ThemedText