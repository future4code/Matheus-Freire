import app from "./app";
import { UserDataBase } from "./data/UserDataBase";
import { createRecipe } from "./endpoints/createRecipe";
import { createRecipeById } from "./endpoints/createRecipeById";
import { getUser } from "./endpoints/getUser";
import { getUserById } from "./endpoints/getUserById";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";


app.post("/signup",signup)
app.post("/login",login)
app.get("/getUser",getUser)
app.get("/user/:id",getUserById)

app.post("/recipe",createRecipe)
app.get("/recipe/:id",createRecipeById)