import { TouchableOpacity, Text } from "react-native";
import { styled } from 'nativewind';

function ButtonStyled({...rest}){
    return(
        <TouchableOpacity className="h-14 bg-green-400 rounded-md items-center justify-center" {...rest}>
            <Text className="text-white text-md">
                Teste com component
            </Text>
        </TouchableOpacity>

    )
}

const Button = styled(ButtonStyled);
export { Button };