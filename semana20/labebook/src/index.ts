import app from "./app";
import { UserController } from "./controller/UserController";
const userController = new UserController()
app.post("/signup", (req,res)=>userController.signup(req,res))