import {Sequelize} from 'sequelize'

const db = new Sequelize('app_gimnasio_db', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db