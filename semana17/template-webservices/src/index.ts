import app from "./app"
import  { createAdress } from './endpoints/createAdress'
import { createUser } from "./endpoints/createUser"
import { getAdressInfo } from "./services/getAdressInfo"



app.post("/user",createAdress)
app.post("/criar",createUser)