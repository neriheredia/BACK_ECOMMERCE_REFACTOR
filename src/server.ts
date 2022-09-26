import { app } from './app'
import nosqlConnect from './settings/mongo_settings/mongodbConnect'

const port = 5000
const engine = <string>process.env.DB_ENGINE

app.listen(port, () => console.log(`Server is listening on port ${port}!`))

if (engine === 'nosql') nosqlConnect()
