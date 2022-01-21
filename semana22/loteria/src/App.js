import React from "react"
import { Filtro} from "./components/filtro"
import useRequestData from "./hooks/useRequestData"
import Router from "./routes/Router"
export const App = () =>{
  const data= useRequestData([],`https://brainn-api-loterias.herokuapp.com/api/v1/loterias`)
  console.log(data)
  return(
    <div>
      {/* {data.map((x)=>{
        return(
          <div>
            <select>
              <option>{x.nome}</option>
            </select>
          </div>
        )
      })} */}
      <Filtro/>
      <Router/>
    </div>
  )
}
