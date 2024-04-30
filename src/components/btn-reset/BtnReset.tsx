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

    const iconReset = require('../../../layout/reset.png');
    return (
        <ButtonStyled
            onPress={reset}
        >
            <ImgIcon style={{ tintColor: iconColor }}  source={iconReset} />
        </ButtonStyled>
    );
};

export default BtnReset;
