import { useEffect, useState } from 'react'
import { Button, Form, H4, Input, Label, Spinner, View } from 'tamagui'
import { Container } from './style'
// import Constants from 'expo-constants';
// import * as Device from 'expo-device';



export default function FormsScreen() {

  const [dataForm, setDataFom] = useState({ name: '', email: '', idDispositivo:'Calabreso'});  //Device.osBuildId

  const handleNome = (e: any) => {
    setDataFom({ ...dataForm, name: e })
  };
  const handleEmail = (e:any) => {
    setDataFom({ ...dataForm, email: e })
  };
  const sendDataForm = () => {
    const url = 'http://localhost/api/Users'
    // const url = 'https://localhost:3000/api/Users'

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm), 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then(data => {
    
      console.log(data); 
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });

  }

  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')
  useEffect(() => {

    if (status === 'submitting') {

      const timer = setTimeout(() => setStatus('off'), 2000)

      return () => {

        clearTimeout(timer)

      }

    }

  }, [status])
  return (
    <Container>
      <Form
        alignItems="center"
        width={'90%'}
        height={'70%'}
        gap="$2"
        onSubmit={sendDataForm}
        borderWidth={1}
        borderRadius="$4"
        backgroundColor="$background"
        borderColor="$borderColor"
        padding="$5"
      >

        <H4>Formulário</H4>
        <View width={'90%'} alignItems='center' marginTop='10%'>

          <View width={'80%'}>
            <Label htmlFor="name">
              Nome:
            </Label>
          </View>
          <Input width="80%" size="$4" borderWidth={2} onChangeText={handleNome} />

          <View width={'80%'}>
            <Label htmlFor="email">
              Email:
            </Label>
          </View>
          <Input width="80%" size="$4" borderWidth={2} onChangeText={handleEmail} />

          <Form.Trigger asChild disabled={status !== 'off'}>
                  
              <Button icon= {status === 'submitting' ? () => <Spinner /> : undefined} marginTop="10%">
                Enviar
              </Button>
          </Form.Trigger>
        </View>

      </Form>
    </Container>

  )

}
