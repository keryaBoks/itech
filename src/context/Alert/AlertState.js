import { AlertContext } from "./AlertContex";
import React, {useReducer } from "react";
import { AlertReducer } from "./AlertReducer";
import { HIDE_ALERT, SHOW_ALET } from "./types";

export const AlertState =({children})=>{
    
    const [state, dispatch] = useReducer(AlertReducer,null)
    
   const show =(text,type='secondary')=>{
       dispatch({type:SHOW_ALET,payload:{text,type}})
   } 

   const hide =()=> dispatch({type:HIDE_ALERT})

    return(
    <AlertContext.Provider value={{
        hide,show,alert:state
    }}>
        { children }
    </AlertContext.Provider>
    )
}