import { Image, View} from 'react-native';
import { OurOffers } from '../../components/OurOffers';
import { styles } from './style';
import logo from "../../assets/images/logo.png"

export const HomeScreen = () => {
    return (
        <View style={styles.containerHomeScreen}> 

        <Image source = {logo} style={styles.logoHome}/>

        <OurOffers />
        </View>
)}