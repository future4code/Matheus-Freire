import exp from "constants"
import { Character, performAttack, validateCharacter } from "../src"


test("teste que verifique o comportamento da função com um personagem com o nome vazio",()=>{
    const personagem = {
        name: "",
        life: 1500,
      strength: 300,
      defense: 500,
    }
    const result = validateCharacter(personagem)
    expect(result).toBe(false)
})
test("verifique o comportamento da função com um personagem com a vida igual a zero",()=>{
    const personagem = {
        name: "amem",
        life: 0,
      strength: 300,
      defense: 500,
    }
    const result = validateCharacter(personagem)
    expect(result).toBe(false)
})
test("verifique o comportamento da função com um personagem com a força igual a zero",()=>{
    const personagem = {
        name: "amem",
        life: 500,
      strength: 0,
      defense: 500,
    }
    const result = validateCharacter(personagem)
    expect(result).toBe(false)
})
test("verifique o comportamento da função com um personagem com a defesa igual a zero",()=>{
    const personagem = {
        name: "amem",
        life: 500,
      strength: 110,
      defense: 0,
    }
    const result = validateCharacter(personagem)
    expect(result).toBe(false)
})
test(" comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo",()=>{
    const personagem = {
        name: "amem",
        life: 500,
      strength: -110,
      defense: 110,
    }
    const result = validateCharacter(personagem)
    expect(result).toBe(false)
})

test(" verifique o comportamento da função com um personagem com as informações validas",()=>{
    const personagem = {
        name: "amem",
        life: 500,
      strength: 110,
      defense: 110,
    }
    const result = validateCharacter(personagem)
    expect(result).toBe(true)
})

test("creating mock",()=>{
  const validatorMock = jest.fn(() => {
    return true
  });
})

test("creating mock",()=>{
  const validatorMock = jest.fn(()=>{
    return true
  })
  const attacker: Character = {
    name: "Scorpion",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  performAttack(attacker, defender, validatorMock as any);
  expect(defender.life).toEqual(1300)
  expect(validatorMock).toHaveBeenCalled();
  expect(validatorMock).toHaveBeenCalledTimes(2);
  expect(validatorMock).toHaveReturnedTimes(2);
})


test("Should return invalid character error", () => {
  expect.assertions(4);
  const validatorMock = jest.fn(() => {
    return false;
  });

  const attacker: Character = {
    name: "",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  try {
    performAttack(attacker, defender, validatorMock as any);
  } catch (err) {
    expect(err.message).toBe("Invalid character");
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  }
});