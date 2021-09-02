import app from "./app";
import { createProduct } from "./endpoint/createProduct";
import { createTrip } from "./endpoint/createTrip";
import { createUser } from "./endpoint/createUser";
import { getProducts } from "./endpoint/getProducts";
import { getUser } from "./endpoint/getUser";

app.post("/addUser",createUser)
app.post("/createProduct",createProduct)

app.get("/getUser",getUser)
app.get("/getProducts",getProducts)

//--------------------->desafio<--------------------------

app.post("/createTrip",createTrip)