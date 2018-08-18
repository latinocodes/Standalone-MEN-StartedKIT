import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'


mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)

mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${mongoUri}`)
})


app.listen(config.port, (err) => {
    if(err){
        console.log(err)
    }
    console.info(`Server Started on port: ${config.port}`);
})