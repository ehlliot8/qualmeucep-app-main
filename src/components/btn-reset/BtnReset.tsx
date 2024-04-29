import { Button } from "react-native-paper";
import { StyleSheet, Image } from "react-native";

type Props = {

    resetFunction: any
    cepResponseLength: number;
};
const BtnReset = (props: Props) => {
    const reset = () => {
        props.resetFunction()
    }
    const iconColor = props.cepResponseLength > 0 ? '#98EECC' : '#B4B4B8';

    return (
        <Button
            onPress={reset}
            contentStyle={styles.buttonContent}
        >
            <Image style={[styles.imgIcon, { tintColor: iconColor }]} source={require('../../../assets/reset.png')} />
        </Button>
    );
};

export default BtnReset;

const styles = StyleSheet.create({
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:40

    },
    imgIcon: {
        height:30,
        width:30,
    }

});