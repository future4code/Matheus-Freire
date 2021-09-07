import app from "./app";
import { getLogin } from "./data/getLogin";
import { create } from "./endpoint/create";
import { createLogin } from "./endpoint/createLogin";

app.post("/user/signup",create)

app.get("/getLogin",getLogin)

app.post("/user/login",createLogin)