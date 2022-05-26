# Boas vindas ao repositório do projeto de testes com a React Testing Library!


# Habilidades
Neste projeto, verificamos se voce é capaz de:
    - Utilizar os seletores (queries) da React-Testing-Library em testes automatizados.
    - Simular eventos com a React-Testing-Library em testes automatizados.
    - Testar fluxos lógicos assíncronos com a React-Testing-Library.
    - Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados.
    - Criar mocks de APIs utilizando fetch.
    - Testar inputs.
---

## O que deverá ser desenvolvido
Nesse projeto você escreverá testes para uma aplicação React.
---

## 1. Teste o componente `<App.js />`
    - Teste se o topo da aplicação contém um conjunto fixo de links de navegação.
        - O primeiro link deve possuir o texto `Home`.
        - O segundo link deve possuir o texto `About`.
        - O terceiro link deve possuir o texto `Favorite Pokémons`.
    - Teste se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação.
    - Teste se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação.
    - Teste se a aplicação é redirecionada para a página de `Pokémons Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémons` da barra de navegação.
    - Teste se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.
---

## 2. Teste o componente `<About.js />.`
    - Teste se a página contém as informações sobre a Pokédex.
    - Teste se a página contém um heading `h2` com o texto `About Pokédex`.
    - Teste se a página contém dois parágrafos com texto sobre a Pokédex.
    - Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.
---

## 3. Teste o componente `<FavoritePokemons.js />`
    - Teste se é exibido na tela a mensagem `No favorite pokemon found`, se a pessoa não tiver pokémons favoritos.
    - Teste se é exibido todos os cards de pokémons favoritados.
---

## 4. Teste o componente `<NotFound.js />`
    - Teste se página contém um heading `h2` com o texto `Page requested not found `;
    - Teste se página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.
---

## 5. Teste o componente `<Pokedex.js />`
    - Teste se página contém um heading `h2` com o texto `Encountered pokémons`.
    - Teste se é exibido o próximo Pokémon da lista quando o botão `Próximo pokémon` é clicado.
        - O botão deve conter o texto `Próximo pokémon`;
        - Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;
        - O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista;
    - Teste se é mostrado apenas um Pokémon por vez;
    - Teste se a Pokédex tem os botões de filtro;
        - Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição;
        - A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;
        - O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`;
        - O botão `All` precisa estar **sempre** visível;
    - Teste se a Pokédex contém um botão para resetar o filtro;
        - O texto do botão deve ser `All`;
        - A Pokedéx deverá mostrar os Pokémons normalmente (sem filtros) quando o botão `All` for clicado;
        - Ao carregar a página, o filtro selecionado deverá ser `All`;
---

## 6. Teste o componente `<Pokemon.js />`
    - Teste se é renderizado um card com as informações de determinado pokémon.
        - O nome correto do Pokémon deve ser mostrado na tela;
        - O tipo correto do pokémon deve ser mostrado na tela;
        - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida;
        - A imagem do Pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon;
    - Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do Pokémon exibido;
    - Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon.;
    - Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do Pokémon cujos detalhes se deseja ver;
    - Teste se existe um ícone de estrela nos Pokémons favoritados;
        - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;
        - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do Pokémon exibido;

## 7. Teste o componente `<PokemonDetails.js />`
    - Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela.
        - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do Pokémon;
        - **Não** deve existir o link de navegação para os detalhes do Pokémon selecionado;
        - A seção de detalhes deve conter um heading `h2` com o texto `Summary`;
        - A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado;
    - Teste se existe na página uma seção com os mapas contendo as localizações do pokémon;
        - Na seção de detalhes deverá existir um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do Pokémon exibido;
        - Todas as localizações do Pokémon devem ser mostradas na seção de detalhes;
        - Devem ser exibidos, o nome da localização e uma imagem do mapa em cada localização;
        - A imagem da localização deve ter um atributo `src` com a URL da localização;
        - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do Pokémon;
    - Teste se o usuário pode favoritar um pokémon através da página de detalhes;
        - A página deve exibir um `checkbox` que permite favoritar o Pokémon;
        - Cliques alternados no `checkbox` devem adicionar e remover respectivamente o Pokémon da lista de favoritos;
        - O `label` do `checkbox` deve conter o texto `Pokémon favoritado?`;
