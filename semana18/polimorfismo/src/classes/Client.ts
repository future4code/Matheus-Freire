

export interface Client {
    name: string;
    registrationNumber: number; //id
    consumedEnergy: number;
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }