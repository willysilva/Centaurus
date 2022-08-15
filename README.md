#Centaurus

Esse projeto é o designer system inicial da serasa, a intenção de separar em um package npm é para ser utilizado em multiplos projetos

para a criação da arquitetura foi utilizado o [Stitches](https://stitches.dev)

O stitches permite utilizar a tipografia de
forma independente do framework, e permite estilizar
componentes inteiros sem depender necessariamente de
personalização dentro do framework utilizando o [Stitches Agnostic Core](https://stitches.dev/docs/framework-agnostic) ,
deixando a componentização independente e reutilizável em projetos separados.

## Instalação

```bash
  npm i centaurus-styles
```

## Exemplo

Para utilizar o centaurus basta importar o `styled` que faz parte
do [Stitches](https://stitches.dev) e o `theme` que tem as configurações
definidas pelo pacote para a tipografia

```javascript
import { styled, theme } from "centaurus-styles";

export const InputStyles = styled("input", {
  fontSize: theme.fontSizes.subHeading,
  fontFamily: theme.fontFamilies.default,
  fontWeight: theme.fontWeights.regular
  border: `1px solid ${theme.colors.magenta}`
  }})
```
