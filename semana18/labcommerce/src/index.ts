import app from "./app";
import { createUser } from "./endpoint/createUser";

app.post("/addUser",createUser)