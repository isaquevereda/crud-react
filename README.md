
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



