# Aprendendo a utilizar testes

- [Documentação react native test library](https://callstack.github.io/react-native-testing-library/docs/getting-started)

- [Documentação do jest](https://jestjs.io/pt-BR/docs/getting-started)

### Configuração

- [Extensão para facilitar executar teste](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner).

## Libs que já vem instaladas ao projeto (Verificar no package.json).

- jest
- react-test-renderer


## Libs que precisa ser instaladas.

```sh
yarn add --dev @testing-library/react-native
yarn add --dev @testing-library/jest-native
```

### configurando o packahe.json

- Antes de configurar

```json
"jest": {
    "preset": "react-native",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }
```

- Depois de configurar

```
"jest": {
    "preset": "react-native",
    "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }

```

### Comando para rodar os testes

### Criando testes

1.0 - Arquivos que vão ser renderizados como testes.

- teste.spec.tsx
- teste.test.tsx

2.0 - Criando um teste.

```sh
yarn test --testPathPattern=the comp

> --testPathPattern= = flag infornando que e para rodar apenas um teste por vez.
> 'the comp' = nome do teste a ser rodado.
```

2.1 - Estrutura para criar um teste

```javascript

```

```javascript
// como estamos trabalhando com componenetes precisamos do 'React'
import React from 'react';

// lib que vai rendenrizar o componente
import {render} from '@testing-library/react-native';

// componente importado que vai ser renderizado
import {StarRating} from './StarRating';

// describe - criar um conjunto de teste relacionados
describe('StarRating', () => {
  // forma de criar um teste
  it('the component rendered', () => {
    // forma de renderizar o componente
    const {debug} = render(<StarRating rating={{average: 7}} />);
    debug();
  });
});
```
