import { app } from './app'
import nosqlConnect from './settings/mongo_settings/mongodbConnect'
import { swaggerDocs } from './docs/swagger_config'

const port = process.env.PORT || 5000
const engine = <string>process.env.DB_ENGINE

app.listen(port, ():void => {
  console.log(`Server is listening on port ${port}!`)
  swaggerDocs(app, port, 'v1')
})

if (engine === 'nosql') nosqlConnect()
