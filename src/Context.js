import React from 'react'
import { createContext ,useContext} from 'react'

export const contextCart = createContext()
export const contextFetch=createContext()
const reducer=(state,action)=>{
    switch (action.type) {
        case "add":
            console.log(state)
            if(state.indexOf(action.payload)===-1){
                console.log("inside the add and if")
                return [...state,action.payload]
            }
            return [...state]
        case "remove":
            console.log("inside remove condition")
            console.log(state.indexOf(action.payload),"cough cough")
            const newState=state.filter(item => item !== action.payload)
            console.log(newState,"removed",action.payload)
            return newState        
        default:
            break;
        }
                
}

export const Context = ({ children} ) => {
    const [state,dispatch]=React.useReducer(reducer,[])
    return(
        <contextFetch.Provider value={dispatch}> 
        <contextCart.Provider value={state}>
            {children}
        </contextCart.Provider>
        </contextFetch.Provider>
    )}
export const useContextFetch=()=>useContext(contextFetch)
// export default Context;
