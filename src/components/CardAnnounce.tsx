import type { CardProps } from 'tamagui'
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui'
import { ContainerCarAnnounce } from './styles'



export function CardAnnounce(props: CardProps) {

  return (
    <ContainerCarAnnounce>

      <Card elevate size="$4" bordered {...props}>

        <Card.Header padded>
          <Image
            source={{
              width: 20,
              height: 20,
              uri: 'https://www.canva.com/templates/EAFe2pEjKjQ-colorful-gradient-background-man-3d-avatar/'
            }}
          />
        </Card.Header>

        <Card.Header>
          <H2>Raça do Animal</H2>
          <Paragraph theme="alt2">Nome do animal</Paragraph>
          <Paragraph theme="alt2">idade</Paragraph>
          <Paragraph theme="alt2">nome</Paragraph>
        </Card.Header>

        <Card.Footer padded>
          <XStack flex={1} />
          <Button borderRadius="$10">Ver mais</Button>
        </Card.Footer>


      </Card>
    </ContainerCarAnnounce>
  )
}