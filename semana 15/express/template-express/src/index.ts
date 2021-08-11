import express,{Express,Request,Response} from 'express'
import cors from 'cors'
import { countries } from './data'
import { country } from './types'
const app: Express=express()
app.use(express.json()) //converte um body em objeto
app.use(cors()) // serve pra não tomar erro de cors 

app.get("/countries",(req,res)=>{
    const result = countries.map((x)=>{
        return ({
            id: x.id,
            name: x.name
            }
        )
    })
    res.status(200).send(result)
})
app.get("/countries/search",(req,res)=>{
    let result:country[] =countries
    if(req.query.name){
        result = countries.filter(country=> country.name.includes(req.query.name as string))
    }
    if(req.query.capital){
        result=countries.filter(country=>country.capital.includes(req.query.capital as string))
    }
    if(req.query.continent){
        result = countries.filter(country=>country.continent.includes(req.query.continent as string))
    }
    if(req.query.name && req.query.continent){
        result=countries.filter(country=>country.name.includes(req.query.name as string) && country.continent.includes(req.query.continent as string) )
    }
    res.send(result)
})

 app.get('/countries/:id',(req,res)=>{
     const result = countries.find((country)=>{
         return country.id===Number(req.params.id)
     })// find retorna um objeto se fosse filter retornava array
     if(result===undefined){
         res.status(400).send('country not found')
     }
     else{
         res.send(result)
     }
 })
app.delete("/countries/:id",(req,res)=>{
    try{
        const token=req.headers.authorization
        if(!token){
            throw new Error("Não autorizado.Verifique se o header Authorization foi passado")
        }
        const index = countries.findIndex((country)=>{
            return country.id===Number(req.params.id)
        })
        if(index===-1){
            res.statusCode=404
            throw new Error('país não encontrado!')
        }
        countries.splice(index,1)
        res.status(204).end()
    }catch(error){
        res.statusMessage=error.message
        res.status(404).end()
    }
})
app.listen(3003, ()=>{
    console.log('servidor pronto!')
}) //porta que vai abrir 