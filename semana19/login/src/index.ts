import app from "./app";
import { getLogin } from "./data/getLogin";
import { create } from "./endpoint/create";
import { createLogin } from "./endpoint/createLogin";
import { getUserId } from "./endpoint/getUserId";

app.post("/user/signup",create)

app.get("/getLogin",getLogin)

app.post("/user/login",createLogin)

app.get("/user/profile",getUserId)