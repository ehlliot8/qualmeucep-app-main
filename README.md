# Buscador de CEP

Este é um aplicativo simples desenvolvido com TypeScript, React Native e Expo, que permite aos usuários buscar por CEPs e copiá-los para a área de transferência.

## Funcionalidades

- **Busca de CEP**: Os usuários podem inserir um CEP na caixa de pesquisa e o aplicativo fornecerá as informações correspondentes.
- **Cópia fácil**: Com apenas um toque, os usuários podem copiar o CEP para a área de transferência do dispositivo.
- **Armazenamento local**: Utiliza o AsyncStorage para armazenar os CEPs pesquisados anteriormente, facilitando o acesso a eles sem a necessidade de nova pesquisa.

## Tecnologias Utilizadas

- **TypeScript**: TypeScript foi utilizado para fornecer tipagem estática ao código, garantindo mais robustez e facilitando a manutenção.
- **React Native**: O React Native foi a escolha para o desenvolvimento do aplicativo móvel, permitindo uma experiência nativa em dispositivos iOS e Android.
- **Expo**: Expo foi utilizado como ferramenta de desenvolvimento, facilitando a criação, teste e implantação do aplicativo.
- **AsyncStorage**: AsyncStorage foi utilizado para o armazenamento local dos CEPs pesquisados, proporcionando uma experiência mais fluida aos usuários.

## Como Executar

Para executar o aplicativo localmente, siga estas etapas:

1. **Instale as dependências**: Execute `npm install` ou `yarn install` no diretório raiz do projeto para instalar todas as dependências necessárias.
2. **Inicie o servidor de desenvolvimento**: Execute `expo start` para iniciar o servidor de desenvolvimento do Expo.
3. **Visualize o aplicativo**: Use o Expo Client em seu dispositivo móvel para escanear o código QR gerado ou execute em um emulador iOS ou Android.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema para relatar bugs ou solicitar novos recursos. Se desejar contribuir com código, por favor, abra um PR e descreva detalhadamente as alterações propostas.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
