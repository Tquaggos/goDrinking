import { View, Text, ScrollView } from "react-native"
import { CardSize } from "../CardSize"
import product from "../../assets/images/product.png"
import { styles } from "./style"

export const AvaliableSizes = () => {
    return (
        <View style={styles.containerAvaliableSize}>
            <Text style={styles.textTittle}>Tamanhos <Text style={styles.textHighlight}>Disponiveis</Text></Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <CardSize image={product} amount="269" measure="ml" />
                <CardSize image={product} amount="269" measure="ml" />
                <CardSize image={product} amount="269" measure="ml" />
                <CardSize image={product} amount="269" measure="ml" />
                <CardSize image={product} amount="269" measure="ml" />
                <CardSize image={product} amount="269" measure="ml" />
                <CardSize image={product} amount="269" measure="ml" />
            </ScrollView>
        </View>
    )
}