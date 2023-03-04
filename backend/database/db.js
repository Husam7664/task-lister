import mongoose from 'mongoose'

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-sckd5d6-shard-00-00.3bcbrsm.mongodb.net:27017,ac-sckd5d6-shard-00-01.3bcbrsm.mongodb.net:27017,ac-sckd5d6-shard-00-02.3bcbrsm.mongodb.net:27017/?ssl=true&replicaSet=atlas-mo3bkp-shard-0&authSource=admin&retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('Database Connected Succesfully')
  } catch (error) {
    console.log('Error while connecting with the database', error)
  }
}

export default Connection
