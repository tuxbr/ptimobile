import { TouchableOpacity, Text, View,Image } from "react-native";
import { styled } from 'nativewind';


function CardStyled({data}){
    return(
        <View className="rounded-2xl shadow-md bg-gray-50 flex flex-row items-center justify-center gap-4 w-auto h-auto p-3">
            <View>
                <Text className="font-bold text-lg">
                    {data.title}
                </Text>
                <View className="flex-1 flex-row gap-1">
                    <Image 
                        source={{ uri: 'https://i.pinimg.com/originals/c9/1e/ee/c91eee0d4790dbf97c866b3a523a4f28.png' }}
                        width={10}
                        height={10} 
                    />
                    <Text className="">
                        {data.calories}
                    </Text>
                </View>
                <Text className="text-yellow-500 font-bold">
                    {data.price}
                </Text>
            </View>
            <View className="m-3">
                <Image 
                    source={{uri: data.imageUrl}}
                    width={60}
                    height={60} 
                />
            </View>
        </View>
    )
}

const StyledCard = styled(CardStyled);
export { StyledCard as Card };