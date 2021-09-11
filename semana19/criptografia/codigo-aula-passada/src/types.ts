export type user = {
   id: string
   email: string
   name: string
   nickname: string
   password: string,
   role?:string
}

export interface authenticationData {
   id: string,
   role:string
}