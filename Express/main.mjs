import express from 'express'
import { pikachu } from '../Server/pokemon/pikachu.mjs'
const app = express()
app.disable('x-powered-by') // Deshabilitar la cabecera 'X-Powered-By' por seguridad

const port = process.env.PORT ?? 3000


app.use(express.json()) // Middleware para parsear JSON en el cuerpo de las solicitudes

//Implementación de Middleware a mano
/* app.use((req, res, next) => {
    console.log('Recibida una petición de tipo:', req.method + ' - En la ruta: ' + req.url)
    if (req.method !== 'POST') return next() // Si no es una petición POST, pasar al siguiente middleware o ruta
    if (req.headers['content-type'] !== 'application/json') return next() // Si el tipo de contenido no es JSON, pasar al siguiente middleware o ruta
    let body = ''
    // Escuchar los datos enviados en el cuerpo de la solicitud
    req.on('data', chunk => {
        body += chunk.toString()
    })
    // Cuando se hayan recibido todos los datos, procesarlos
    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        //Mutar el request y usar la información en el req.body
        req.body = data
        next() // Pasar el control al siguiente middleware o ruta
        }) 
}) */

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body)
})


app.get('/', (req, res) => {
    res.send('<h1>Hola mundo!</h1>')
})

app.get('/pokemon/pikachu', (req, res) => {
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png'
    res.send(`<h1>${pikachu.name}</h1><img src="${url}" alt="Pikachu">`)
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})


app.use((req, res) => {
    res.status(404).send('<h1>404 - Página no encontrada</h1>')
})

