import { useReducer } from "react"
import axios from 'axios'
import { CLEAT_USERS, GET_REPOS, GET_USERS, SEARCH_USERS, SET_LOADING } from "../Alert/types"
import { GitHubContext } from "./gitHubContex"
import { gitHubReducer } from "./gitHubReducer"

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCreds =url =>{
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GitHubState = ({children})=>{

    const initialState={
        user:{},
        users:[],
        loading:false,
        repos:[]
    }

    const [state,dispatch] = useReducer(gitHubReducer,initialState)


    const search = async value=>{
        setLoading()

        const response = await axios.get(
         withCreds(`https://api.github.com/search/users?q=${value}&`)
        )

        dispatch({
            type:SEARCH_USERS,
            payload:response.data.items
        })
    }

    
    const getUser = async name =>{
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}?`)
        )

        dispatch({
            type:GET_USERS,
            payload:response.data
        })
    }

    
    const getRepos = async name=>{
        setLoading()
       
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
        )


        dispatch({
            type:GET_REPOS,
            payload:response.data
        })
    }

    const clearUsers = ()=>{
        dispatch({type:CLEAT_USERS})
    }

    const setLoading =()=>{
        dispatch({type:SET_LOADING})
    }

    const {user,users,loading,repos} = state

    return(
        <GitHubContext.Provider value={{
            search,getUser,getRepos,clearUsers,setLoading,
            user,users,loading,repos
        }}>
            {children}
        </GitHubContext.Provider>
    )
}