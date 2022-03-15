import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
import { getUser } from "./endpoints/getUser"

app.post('/users/signup', createUser)
app.post('/users/login', login)
app.put('/users', editUser)
app.get("/getUser",getUser)
