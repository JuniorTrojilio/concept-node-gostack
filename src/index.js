const express = require('express')
const app = express()
const cors = require('cors')
const { uuid, isUuid } = require('uuidv4')
const projects = []
app.use(cors())
app.use(express.json())
app.use(logRequests)
app.use('/projects/:id', validadeProjectId)

function logRequests(req, res, next){
    const { method, url} = req
    const logLabel = `[${method.toUpperCase()}] ${url}`
    console.time(logLabel)
    next()
    console.timeEnd(logLabel)
}

function validadeProjectId(req, res, next){
    const { id } = req.params
    if(!isUuid(id)){
        return res.status(400).json({"Error": "Invalid project Id"})
    }
    next()
}

app.get('/projects', (req, res) => {
    const { tittle } = req.query

    const results = tittle 
    ? projects.filter(project => project.tittle.includes(tittle))
    : projects

    return res.json(results) 
})

app.post('/projects', (req, res) =>{
    const {tittle, owner} = req.body;
    const project = {id : uuid(), tittle, owner}
    projects.push(project)
    return res.json(project)
})

app.put('/projects/:id', (req, res) =>{
    const { id } = req.params
    const {tittle, owner} = req.body;
    const projectIndex = projects.findIndex(project => project.id === id)
    
    if(projectIndex < 0){
        return res.status(400).json({"Error":"project not found"})
    }

    const project = {
        id,
        tittle,
        owner
    }

    projects[projectIndex] = project

    return res.json(project) 
})

app.delete('/projects/:id', (req, res) =>{
    const { id } = req.params
    const {tittle, owner} = req.body
    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0){
        return res.status(400).json({"Error" : "Project not found"})
    }

    projects.splice(projectIndex, 1)

    return res.status(203).send()

})

app.listen(3333, () =>{
    console.log('Back-end started 🛠')
})