import React, { useContext, useState } from "react";  
import { AlertContext } from "../context/Alert/AlertContex";
import { GitHubContext } from "../context/gitHub/gitHubContex";

export const Search =()=>{

    const [value,setValue] = useState('')

    const alert= useContext(AlertContext)
    const gitHub = useContext(GitHubContext)
    
    const onSubmit =(event)=>{
        if(event.key !== 'Enter'){
            return
        }

        gitHub.clearUsers()

        if(value.trim()){
            alert.hide()
            gitHub.search(value.trim())
        }else{
            alert.show('Enter valid data')
        }
    }
    
    return(
        <div className="form-group mt-3">
            <input
            type='text'
            className="form-control"
            placeholder="Enter NickNAme"
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyPress={onSubmit}
            />

        </div>
    )
}