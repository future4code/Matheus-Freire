import app from "./app";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";
const userController = new UserController()
const postController = new PostController()
app.post("/signup", (req,res)=>userController.signup(req,res))
app.post("/login",(req,res)=>userController.login(req,res))
app.post("/createPost",(req,res)=>postController.createPost(req,res))

app.get("/getPost/:id",(req,res)=>postController.getPostById(req,res))