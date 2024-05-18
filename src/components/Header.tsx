import { ContainerHeaderHome } from './styles';
import { Button, Input, XStack, YStack } from 'tamagui';




export default function Header() {

    return (

        <ContainerHeaderHome>
            <Input size="$4" borderWidth={2} width={300} />
            <Button width={100}>Filtrar</Button>
        </ContainerHeaderHome>
    );
}


