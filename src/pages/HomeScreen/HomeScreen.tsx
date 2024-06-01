import { Container } from './styles';
import Header from '../../components/Header'
import { CardAnnounce } from '@/components/CardAnnounce';
import { ScrollView } from 'tamagui';



export default function Home() {

  return (
    <Container >
      <Header />
      <ScrollView
       maxHeight="100%"
       width="95%"
       backgroundColor="$background"
       padding="$2"
       borderRadius="$4"
       >

        <CardAnnounce
          animation="bouncy"
          size="$4"
          width={350}
          height={200}
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        />

        <CardAnnounce
          animation="bouncy"
          size="$4"
          width={350}
          height={200}
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        />

        <CardAnnounce
          animation="bouncy"
          size="$4"
          width={350}
          height={200}
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        />
      </ScrollView>

    </Container>
  );
}


