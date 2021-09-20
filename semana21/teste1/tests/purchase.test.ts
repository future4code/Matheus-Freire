// // ----------------------------------  exercicios 1 e 2 ------------------
// import { purchase, User } from "../src"

import exp from "constants"
import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src"


// test("usuário com o saldo maior do que o valor de compra",()=>{
//     const user:User={
//         name:"Astrodev",
//         balance: 100
//     }
//     const result = purchase(user,40)
//     expect(result).toEqual({
//         name:"Astrodev",
//         balance:60
//     })
// })
// test(" usuário com o saldo igual ao valor de compra",()=>{
//     const user:User={
//         name:"Astrodev",
//         balance: 50
//     }
//     const result = purchase(user,50)
//     expect(result).toEqual({
//         name:user.name,
//         balance:0
//     })
// })
// test("teste com um usuário com o saldo menor do que o valor de compra",()=>{
//     const user:User = {
//         name:"Astrodev",
//         balance: 30
//     }
//     const result = purchase(user,40)
//     expect(result).toEqual(undefined)
// })

test("1 brasileiro permitido",()=>{
    const brazilian:User={
        name:"Astrodev",
        age:19,
        nacionality:NACIONALITY.BRAZILIAN
    }
    const casino:Casino={
        name: "balad",
        location:LOCATION.BRAZIL
    }
    const result = verifyAge(casino,[brazilian])
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
})

test("teste que receba um usuário americando que possa entrar em um estabelecimento no Brasil",()=>{
    const american:User={
        name:"astrodev",
        age: 20,
        nacionality: NACIONALITY.AMERICAN
    }
    const casino:Casino={
        name: "balad",
        location:LOCATION.BRAZIL
    }
    const result = verifyAge(casino,[american])
    
    expect(result.americans.allowed).toEqual(["astrodev"]);
})

test("teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.",()=>{
    const american1 = {
        name:"matheus",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }
    const american2 = {
        name:"charlie",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }
    const brazilian1 = {
        name:"lucas",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const brazilian2 = {
        name:"marcos",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const casino:Casino={
        name: "balad",
        location:LOCATION.EUA
    }
    const result = verifyAge(casino,[brazilian1,brazilian2,american1,american2])
    
    expect(result.brazilians.unallowed && result.americans.unallowed).toEqual(
        ["lucas","marcos"]&&["matheus","charlie"]
    )
})

test("ois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.",()=>{
    const american1 = {
        name:"matheus",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const american2 = {
        name:"charlie",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const brazilian1 = {
        name:"lucas",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const brazilian2 = {
        name:"marcos",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const casino:Casino={
        name: "balad",
        location:LOCATION.EUA
    }
    const result = verifyAge(casino,[brazilian1,brazilian2,american1,american2])
    expect(result.brazilians.unallowed && result.americans.allowed).toEqual( ["lucas","marcos"]&&["matheus","charlie"])
})

test("usuário brasileiro que possa entrar em um estabelecimento no Brasil.",()=>{
    const brazilian:User={
        name:"Astrodev",
        age:19,
        nacionality:NACIONALITY.BRAZILIAN
    }
    const casino:Casino={
        name: "balad",
        location:LOCATION.BRAZIL
    }
    const result = verifyAge(casino,[brazilian])
    expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    expect(result.brazilians.allowed.length).toBeLessThan(2)
})

test("usuário americano que possa entrar em um estabelecimento no Brasil",()=>{
    const american:User={
        name:"Astrodev",
        age:19,
        nacionality:NACIONALITY.AMERICAN
    }
    const casino:Casino={
        name: "balad",
        location:LOCATION.BRAZIL
    }
    const result = verifyAge(casino,[american])
    expect(result.americans.unallowed.length).toBe(0)
})

test("Verifique que os arrays unallowed possuam o nome de algum dos usuários que você criou",()=>{
    const american1 = {
        name:"matheus",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const american2 = {
        name:"charlie",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const brazilian1 = {
        name:"lucas",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const brazilian2 = {
        name:"marcos",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const casino:Casino={
        name: "balad",
        location:LOCATION.EUA
    }
    const result = verifyAge(casino,[brazilian1,brazilian2,american1,american2]) 
    expect(result.americans.unallowed.length).toBe(0)
})

test("al",()=>{
    const american1 = {
        name:"matheus",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const american2 = {
        name:"charlie",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const brazilian1 = {
        name:"lucas",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const brazilian2 = {
        name:"marcos",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const casino:Casino={
        name: "balad",
        location:LOCATION.EUA
    }
    const result = verifyAge(casino,[brazilian1,brazilian2,american1,american2]) 
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
    expect(result.americans.unallowed.length).toBeLessThan(1)
    expect(result.americans.allowed.length).toBe(2)

})