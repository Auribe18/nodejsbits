import { pikachu } from './pokemon/pikachu.mjs'
import fs from 'node:fs'

const processRequest = (req, res) => {
    console.log('request received: ',req.url)
    const {method, url} = req
    switch (method){
        case 'GET':
            switch (url) {
                case '/':
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>Hola mundo!</h1>')
                    break
                case '/pokemon/pikachu':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(pikachu))
                    break
                case '/image':
                    res.setHeader('Content-Type', 'image/JPEG')
                    fs.readFile('./assets/image.jpg', (err, data) => {
                        if (err) {
                            res.statusCode = 500
                            res.end('<h1>Ocurrió un error al cargar la imagen</h1>')
                        }else {
                            res.statusCode = 200
                            res.end(data)
                        }
                    })
                    break
                default:
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>Esa página no existe</h1>')
            }
            
    }
}


export { processRequest }