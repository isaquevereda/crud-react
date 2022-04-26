
# CRUD com ReactJS e NodeJS

Desenvolvimento de uma apliação, constituida pelo front-end com ReactJS e as API's desenvolvidas com NodeJS, projeto foi desenvolvido baseado em uma loja de jogos, onde podemos, disponilizar nome do jogo, valor do jogo e categoria.


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/list
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `int` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/list/${id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `int` | **Obrigatório**. A chave da sua API |

#### Registra um item

```http
  POST /api/register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| ``id` ` | `int` | **Obrigatório**. A chave da sua API |

#### Atualiza um item

```http
  PUT /api/edit/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

#### Deleta um item

Recebe dois números e retorna a sua soma.

```http
  DELETE /api/delete/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |




## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/isaquevereda/crud-react.git
```

Entre no diretório do projeto

```bash
  cd crud-react
```

Necessario instalar dependências do client.

```bash
  cd client
```

```bash
  npm install
```

Inicie o cliente

```bash
  npm run start
```

Necessario instalar dependências do server.

```bash
  cd server
```

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```
## Autores

- [@isaquevereda](https://github.com/isaquevereda)

