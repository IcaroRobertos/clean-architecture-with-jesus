import { connect } from 'mongoose'

export async function MongoDBConnection() {
  try {
    await connect("mongodb://root:root@localhost:27017/arc_demo")
    console.log("database connected")
  } catch (e) {
    console.log(e)
  }
}