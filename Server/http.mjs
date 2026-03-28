import http from 'node:http'
import { findAvailablePort } from './utils.mjs'

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello, World!')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
  })
}).catch(err => {
  console.error('Error finding available port:', err)
})