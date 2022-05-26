# Boas vindas ao repositório do projeto Tryunfo!


# Habilidades
Neste projeto, verificamos se voce é capaz de:
  - Ler o estado de um componente e usá-lo para alterar o que exibimos no browser
  - Inicializar um componente, dando a ele um estado pré-definido
  - Atualizar o estado de um componente
  - Capturar eventos utilizando a sintaxe do React
  - Criar formulários utilizando sintaxe JSX com as tags: `input`, `textarea`, `select`, `form`, `checkbox`
  - Transmitir informações de componentes filhos para componentes pais via callbacks
---

## O que deverá ser desenvolvido
Neste projeto você vai desenvolver um jogo no estilo Super Trunfo! Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de:
  - Criar um baralho, com o tema livre;
  - Adicionar e remover uma carta do baralho;
  - Visualizar todas as cartas que foram adicionadas ao baralho;
  - Jogar com o baralho criado.
  ---

# Informações sobre o Super Trunfo
O Super Trunfo é um jogo de cartas que ficou muito popular no Brasil entre as décadas de 80 e 90, mas que faz bastante sucesso até hoje. Suas regras são bastante simples, por isso ele é considerado um jogo fácil de jogar. Apesar de ter regras simples, cada baralho  de Super Trunfo pode ter um tema diferente, o que o torna um jogo bastante divertido.

Originalmente, o jogo de Super Trunfo é formado por um baralho de 32 cartas. Cada carta representa um item relacionado ao tema do jogo. Em cada carta também existe uma lista com características daquele item e cada característica possui um valor numérico.

Para começar o jogo, as cartas devem ser embaralhadas e divididas igualmente para cada participante. Em cada rodada cada pessoa pega somente a primeira carta do seu monte. Na primeira rodada uma pessoa escolhe qual característica quer comparar com as cartas das outras pessoas que estão jogando. Ganha quem tiver o maior número nessa característica. A pessoa que ganhou a rodada recebe as cartas das outras pessoas e escolhe qual característica quer comparar na próxima rodada. O jogo termina quando alguma pessoa tiver todas as cartas do baralho.

Em cada baralho existe uma (e somente uma) carta Super Trunfo. Essa carta ganha de todas as outras cartas do baralho, independentemente dos valores das características.

O jogo de Super Trunfo pode ser feito com praticamente qualquer tema, mas tradicionalmente os mais comuns são: carros, países, cidades ou animais.
---

## 1. Crie o formulário que será usado para adicionar cartas ao baralho
Crie um formulário que será utilizado para criar as cartas do seu baralho.

  * Crie um componente chamado `Form` dentro da pasta `src/components`.
  * Renderize o componente `Form` dentro do componente principal `App`.
  * Crie os seguintes itens dentro do component `Form`:
  * :bulb: **Dica:** Você pode criar um componente de input. Lembre-se de sempre ter uma label associada para cada input.
        - um campo do tipo `text` que contenha o atributo. Este campo será usado para inserir o nome da carta.
        - um campo do tipo `textarea` que contenha o atributo. Este campo será usado para inserir a descrição da carta.
        - um campo do tipo `number` que contenha o atributo . Este campo será usado para inserir o primeiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.
        - um campo do tipo `number` que contenha o atributo . Este campo será usado para inserir o segundo atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.
        - um campo do tipo `number` que contenha o atributo. Este campo será usado para inserir o terceiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.
        - um campo do tipo `text` que contenha o atributo. Este campo será usado para inserir o caminho para imagem da carta.
        - um campo do tipo `select` que contenha o atributo. Este campo será usado para inserir a raridade da carta e deverá ter as `options`: `normal`, `raro` e `muito raro` (é importante que as opções estejam nessa ordem).
        - um campo do tipo `checkbox` que contenha o atributo. Este campo será usado para inserir se a carta é o Super Trunfo.
        - um `button`que contenha o atributo  e que tenha o texto "Salvar".
---

## 2. Adicione as props necessárias ao componente de formulário
  * O componente `Form` deverá receber as seguintes props:
        - `cardName`, uma string;
        - `cardDescription`, uma string;
        - `cardAttr1`, uma string;
        - `cardAttr2`, uma string;
        - `cardAttr3`, uma string;
        - `cardImage`, uma string;
        - `cardRare`, uma string;
        - `cardTrunfo`, um boolean;
        - `hasTrunfo`, um boolean;
        - `isSaveButtonDisabled`, um boolean;
        - `onInputChange`, uma callback;
        - `onSaveButtonClick`, uma callback;

As props do componente `Form` deverão ser utilizadas conforme o indicado abaixo:
  * Campo `name-input`: a propriedade `value` deve receber o valor da prop `cardName` e a prop `onChange` deve receber o valor da prop `onInputChange`.
  * Campo `description-input`: a propriedade `value` deve receber o valor da prop `cardDescription` e a prop `onChange` deve receber o valor da prop `onInputChange`.
  * Campo `attr1-input`: a propriedade `value` deve receber o valor da prop `cardAttr1` e a prop `onChange` deve receber o valor da prop `onInputChange`.
  * Campo `attr2-input`: a propriedade `value` deve receber o valor da prop `cardAttr2` e a prop `onChange` deve receber o valor da prop `onInputChange`.
  * Campo `attr3-input`: a propriedade `value` deve receber o valor da prop `cardAttr3` e a prop `onChange` deve receber o valor da prop `onInputChange`.
  * Campo `image-input`: a propriedade `value` deve receber o valor da prop `cardImage` e a prop `onChange` deve receber o valor da prop `onInputChange`.
  * Campo `rare-input`: a propriedade `value` deve receber o valor da prop `cardRare` e a prop `onChange` deve receber o valor da prop `onInputChange`.
  * Campo `trunfo-input`: a propriedade `checked` deve receber o valor da prop `cardTrunfo` e a prop `onChange` deve receber o valor da prop `onInputChange`.
  * Botão `save-button`: a propriedade `disabled` deve receber o valor da prop `isSaveButtonDisabled` e a prop `onClick` deve receber o valor da prop `onSaveButtonClick`.
---

## 3. Crie e renderize o componente Card com as props necessárias
  * Crie um componente com o nome `Card` na pasta `src/components` e renderize-o  no componente principal `App`. O componente `Card` deve receber as seguintes props:
        - `cardName`, uma string;
        - `cardDescription`, uma string;
        - `cardAttr1`, uma string;
        - `cardAttr2`, uma string;
        - `cardAttr3`, uma string;
        - `cardImage`, uma string;
        - `cardRare`, uma string;
        - `cardTrunfo`, um boolean;

  * Renderize o componente `Card` dentro do componente principal `App`.
  * Exiba o valor da prop `cardName`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo.
  * Exiba a imagem usando a tag HTML `img`, com o atributo `src` que tenha o valor da prop `cardImage` e o atributo `alt` com o valor da prop `cardName`. Essa imagem também deve ter o atributo .
  * Exiba o valor da prop `cardDescription`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo .
  * Exiba o valor da prop `cardAttr1`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo .
  * Exiba o valor da prop `cardAttr2`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo .
  * Exiba o valor da prop `cardAttr3`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo .
  * Exiba o valor da prop `cardRare`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo .
  * Exiba o texto `Super Trunfo` somente quando o valor da prop `cardTrunfo` for `true`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo.
---

## 4. Crie o preview da carta que está sendo criada pelo formulário

Até o momento você criou dois componentes que recebem `props`, agora está na hora de criar o estado dos componentes.
Os componentes `Form` e `Card` irão compartilhar o mesmo estado para exibir as mesmas informações (isso já te dá uma dica de onde o estado deve estar, não é mesmo?).
Quando alguma informação é digitada em algum campo do formulário, o componente `Card` deve exibir a mesma informação em tempo real, criando um preview da carta antes de ela ser salva no baralho (a funcionalidade de salvar será feita nos próximos requisitos).

Você deverá usar a prop `onInputChange` para passar uma callback para lidar com os eventos de `onChange` dos inputs do formulário. Não se esqueça que os valores dos inputs (que também são passados por props) também devem ser salvos em um estado.
---

## 5. Faça a validação do botão de Salvar no formulário
  O botão que possui o atributo `data-testid="save-button"` só deve estar habilitado se todas as informações do formulário estiverem preenchidas corretamente, seguindo as seguintes regras:

  * Os campos `Nome`, `Descrição`, `Imagem` e `Raridade ` devem conter alguma informação (ou seja, os `inputs` não podem estar vazios).
  * A soma dos valores dos 3 atributos (`attr1-input`, `attr2-input` e `attr3-input`) não pode ultrapassar o valor **210**.
  * Cada um dos três atributos pode ter **no máximo 90 pontos cada**.
  * Os atributos não podem receber valores negativos.
---

## 6. Crie a função do botão salvar
Agora que o botão de salvar já está validado, você pode adicionar uma nova carta ao seu baralho. Isso significa que você precisará criar um novo estado na sua aplicação para salvar a lista de cartas existentes no seu baralho.

  * Ao clicar no botão que possui o atributo `data-testid="save-button"`, as informações que foram preenchidas no formulário deverão ser salvas no estado da sua aplicação.
  * Após salvar as informações, os `inputs` do formulário `Nome`, `Descrição` e `Imagem` e o conteúdo do preview da carta deverão ser limpos.
  * Após salvar as informações, os três campos de atributos devem ter valor 0.
  * Após salvar as informações, o campo `Raridade` deve conter o valor `normal`.
---

## 7. Crie a validação do Super Trunfo
Em um baralho de Super Trunfo pode existir apenas **uma carta Super Trunfo**. Por isso é necessário fazer uma validação para que somente 1 carta Super Trunfo seja salva no seu baralho.

Para que uma carta seja salva como Super Trunfo é preciso que o input com o `data-testid="trunfo-input"` esteja `checked` na hora de salvar a carta. Por isso, a validação será feita nesse campo. Para fazer essa validação, você deve usar o prop `hasTrunfo` do componente `Form`.

  * Caso já exista uma carta Super Trunfo em seu baralho, o formulário de criação de carta não deverá exibir o `checkbox` `data-testid="trunfo-input"`. No seu lugar deve ser renderizada a frase: "Você já tem um Super Trunfo em seu baralho".
---

## 8. Exiba a lista de cartas que estão salvas no estado
Você já tem várias cartas legais em seu baralho, agora é a hora de listá-las para que você possa ver toda sua coleção.

  * Renderize dentro do component `App` uma lista com todas as cartas que você tem no estado da aplicação.
  * Garanta que sempre que uma carta for adicionada, a lista é atualizada automaticamente.
---

## 9. Crie um botão para remover uma carta do baralho
  * Criar, em cada carta que está sendo renderizada do seu baralho, um `button` com o texto `Excluir` e o atributo `data-testid="delete-button"`.
  * A carta de _preview_ **não pode ter esse botão**.
  * Ao clicar neste botão, a carta deve ser excluída do seu baralho, ou seja, não deverá mais ser renderizada na página.
  **Dica: Lembre-se que o baralho está sendo renderizado a partir do estado do seu componente!**
  * Se a carta excluída for uma carta Super Trunfo, o `checkbox` do formulário deverá aparecer novamente, tornando possível a criação de uma nova carta Super Trunfo.
---

## 10. Crie o filtro pelo nome da carta
  * Para filtro do **nome**, você deverá criar um campo do tipo `text` e adicionar o atributo `data-testid="name-filter"`.
  * Este campo deve ser renderizado sempre, mesmo se não existir cartas salvas no baralho.
  * Ao digitar neste campo, deve ser renderizado na página apenas as cartas que contenham no `nome` o texto digitado.
---

## 11. Crie o filtro por raridade da carta
  * Para filtrar por **raridade**, você deverá criar um campo do tipo `select` e adicionar o atributo `data-testid="rare-filter"`;
  * Este `select` deve possuir as seguintes `options`: `todas`, `normal`, `raro` e `muito raro`.  Por padrão, a opção `todas` já deverá estar selecionada;
  * Ao selecionar uma das opções, apenas as cartas que possuem a raridade especificada deverão ser renderizadas. Caso esteja selecionada `todas`, não deve ter filtro de raridade aplicado na lista.
  * Se o campo do filtro Nome estiver preenchido, os dois filtros (por nome e por raridade) devem funcionar em conjunto.
---

## 12. Crie o filtro de Super Trunfo
  * Para filtrar por **Super Trunfo**, você deverá criar um campo do tipo `checkbox` com a `label` Super Trunfo e o atributo `data-testid="trunfo-filter"`.
  * Ao selecionar este `checkbox`, apenas a carta **Super Trunfo** deverá ser renderizada.
  * Enquanto o `checkbox` estiver com o atributo `checked`, ou seja, se estiver selecionado, os `inputs` dos filtros por nome e por raridade deverão ficar com o atributo `disabled`.
  * Se o `checkbox` não estiver selecionado, as cartas devem ser renderizadas normalmente, seguindo apenas as regras dos filtros anteriores.
