# Fake Store

Vitrine de produtos que consome a [Fake Store API](https://fakestoreapi.com). Projeto de prática de consumo de API REST com React e TypeScript: os produtos são buscados ao abrir a página e exibidos em uma grade de cards.

## Funcionalidades

- Busca dos produtos em `https://fakestoreapi.com/products` assim que a página carrega.
- Mensagem de carregamento enquanto a requisição está em andamento.
- Cards com imagem, título, preço, categoria e avaliação (nota e número de avaliações).
- Grade responsiva que ajusta a quantidade de colunas à largura da tela.
- Tipagem dos dados da API com interfaces TypeScript.
- Erros de requisição registrados no console.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 | Interface e estado (`useState` e `useEffect`) |
| TypeScript | Tipagem dos produtos e das avaliações |
| Vite | Ambiente de desenvolvimento e build |
| Fetch API | Requisição à Fake Store API |
| ESLint | Padronização do código |

## Como rodar localmente

### Pré-requisitos

- Node.js e npm
- Conexão com a internet, já que os dados vêm da Fake Store API

### Passo a passo

```bash
git clone https://github.com/jasielrasec18-dev/fake-store.git
cd fake-store
npm install
npm run dev
```

Abra o endereço exibido no terminal, normalmente [http://localhost:5173](http://localhost:5173).

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica os tipos e gera o build de produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint |

## Estrutura do projeto

```text
src/
  components/
    Api.tsx     # Busca os produtos e renderiza a grade de cards
  App.tsx       # Componente raiz
  main.tsx      # Ponto de entrada da aplicação
  index.css     # Estilos globais
```

## Próximos passos

- Exibir uma mensagem na tela quando a requisição falhar.
- Ajustar a moeda dos preços: a API retorna valores em dólar, que hoje aparecem com "R$". Formatar com `Intl.NumberFormat` ou converter para reais.
- Adicionar filtro por categoria e busca por nome.
- Mover os estilos inline dos cards para CSS.

## Autor

Desenvolvido por **Jasiel Rasec** · [GitHub](https://github.com/jasielrasec18-dev)
