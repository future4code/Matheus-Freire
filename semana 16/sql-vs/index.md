### Exercício 1
b)const searchByName = async (name:String):Promise<any>=>{
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name="${name}"
    `)
    return result
}

c)const quantidade = async(gender: String): Promise<any>=>{
    const result =await connection.raw(`
    SELECT COUNT(*),gender FROM Actor
    WHERE gender="${gender}"
    `)
    return result
}

### Exercício 2
a)const updateSalary = async(id: string, salary:number):Promise<any>=>{
      await connection("Actor")
      .update({
          salary:salary
      })
      .where("id",id)
  }

b)const deleteActor =async(id:string):Promise<any>=>{
      await connection("Actor")
      .delete()
      .where("id",id)
  }

c)  const mediaSalario = async(gender:string):Promise<any>=>{
      const result = await connection("Actor")
      .avg("salary")
      .where({gender})
      return result[0]
  }

  ### Exercício 3
  b)const quantidadeAtores= async(gender:string):Promise<any>=>{
      const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender=${gender}
      `)
      return result[0][0].count
  }
  app.get("/actor",async(req,res)=>{
    try{
     const gender=req.query.gender
     const count = await quantidadeAtores(gender as string)
     res.status(200).send(`a quantidade de pessoas do gênero ${gender} é ${count}`)
    }catch(error){
      res.status(400).send({message:error.message})
    }
})
  