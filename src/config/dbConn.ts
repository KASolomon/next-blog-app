import mongoose from "mongoose";

const connection = {isConnected : 0}
const connectToMongo = async ()=>{
    try {
        if (connection.isConnected){
            console.log('Existing connection used!')
            return
        }
        const appDbConn = await mongoose.connect(process.env.MONGO_CONNECTION || '', {dbName : 'next_blog'})
        connection.isConnected = appDbConn.connections[0].readyState
        
    } catch (error) {
        console.log('Error connecting to mongo : ', error)
    }
}
export default connectToMongo