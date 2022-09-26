import 'dotenv/config'
import { connect } from 'mongoose'

const dbMongoConnect = async (): Promise<void> => {
  const DB_URI = <string>process.env.DB_URI
  await connect(DB_URI).then(() => console.log('***** CONNECT DATABASE *****')).catch((e) => console.log('***** ERROR CONNECT DATABASE *****'))
}

export default dbMongoConnect
