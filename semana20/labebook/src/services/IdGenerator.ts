import { v4 } from "uuid";


export class IdGenrator{
    generateId(){
        return v4()
    }
}