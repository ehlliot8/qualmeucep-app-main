import { ButtonStyled, ImgIcon } from "./style";

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
        <ButtonStyled
            onPress={reset}
        >
            <ImgIcon style={{ tintColor: iconColor }} source={require('../../../assets/reset.png')} />
        </ButtonStyled>
    );
};

export default BtnReset;
