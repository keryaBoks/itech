import { HIDE_ALERT, SHOW_ALET } from "./types"

const handlers = {
    [SHOW_ALET]: (state,action)=> action.payload,
    [HIDE_ALERT]:()=> null,
    DEFAULT : state=> state
}

export const AlertReducer = (state,action)=>{
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state,action)
}