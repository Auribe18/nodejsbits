import express from 'express'
import { pikachu } from '../Server/pokemon/pikachu.mjs'
const app = express()
app.disable('x-powered-by') // Deshabilitar la cabecera 'X-Powered-By' por seguridad

const port = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    console.log('Recibida una petición de tipo:', req.method + ' - En la ruta: ' + req.url)
    res.send('<h1>Hola mundo!</h1>')
})

app.get('/pokemon/pikachu', (req, res) => {
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png'
    res.send(`<h1>${pikachu.name}</h1><img src="${url}" alt="Pikachu">`)
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})

app.post('/pokemon', (req, res) => {
    let body = ''
    // Escuchar los datos enviados en el cuerpo de la solicitud
    req.on('data', chunk => {
        body += chunk.toString()
    })
    // Cuando se hayan recibido todos los datos, procesarlos
    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        res.status(201).json(data)
        })  
    })