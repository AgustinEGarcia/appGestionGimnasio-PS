import dotenv from 'dotenv'
import {Sequelize} from 'sequelize'

const paths = process.env.NODE_ENV
const envFound = dotenv.config({ path: paths });


const db = new Sequelize(envFound.parsed.DB_URI);

export default db