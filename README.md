<div align="center">
	<img src="https://user-images.githubusercontent.com/39541807/81132560-3a20a000-8f25-11ea-8179-4f4540936787.png">
	<h1> Node Concepts</h1>
</div>
<p align="center">In this initial module we learn the main node concepts.</p>
<div display="inline" align="center">
<img src="https://img.shields.io/github/license/juniortrojilio/concept-node-gostack?style=flat-square" >
<img src="https://img.shields.io/github/last-commit/juniortrojilio/concept-node-gostack">
</div>

---

# Metodos HTTP

## Get

Utilizado para buscar informação do back-end

## Post

Criar uma informação no back-end.

## Put / Patch

Alterar uma informalção no back-end

## Delete

Deletar uma informação no back-end

---

# Códigos de retorno HTTP

## **1XX**: Informativo

A solicitação foi aceita ou o processo continua em andamento;

## 2**XX**: Confirmação

A ação foi concluída ou entendida;

## **3XX**: Redirecionamento

Indica que algo mais precisa ser feito ou precisou ser feito para completar a solicitação;

## **4XX**: Erro do cliente

Indica que a solicitação não pode ser concluída ou contém a sintaxe incorreta;

## **5XX**: Erro no servidor

O servidor falhou ao concluir a solicitação.

---

# Tipos de Parâmetros

## Query Params

Principalmente para filtros e paginação

```jsx
app.get('/projects', (req, res) => {
    const { tittle , name} = req.query
    console.log(tittle)
    console.log(name)
    return res.json([
        'Projeto 1',
        'Projeto 2'
    ]) 
})
```

## Route Params

Identificar recursos na hora de Atualizar ou Deletar

```jsx
app.put('/projects/:id', (req, res) =>{
    const { id } = req.params
    console.log(id)
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
    ]) 
})
```

## Request Body

Conteúdo na hora de criar ou editar um recurso (JSON)

```jsx
app.use(express.json())
app.post('/projects', (req, res) =>{
    const {tittle, owner} = req.body;
    console.log(tittle)
		console.log(owner)
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]) 
})
```

---

# Middleware

Interceptador de requisições, ele pode :

- Interromper
- Alterar dados da requisição

```jsx
app.use(logRequests)

function logRequests(req, res, next){
    const { method, url} = req
    const logLabel = `[${method.toUpperCase()}] ${url}`
    console.log(logLabel)
}

//interrompe totalmente

next() //não interrompe
```

---
<p align="center"> <> with 💙 by Junior Trojilio </p>
<a href="https://www.notion.so/Modulo-01-Node-0767935399044cce8e70d56974e03f9c" align="center"> link to Notion <a>
