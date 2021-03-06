import React, { useContext } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { GitHubContext } from "../context/gitHub/gitHubContex";



export const Home =()=>{

   const {loading,users} = useContext(GitHubContext)

    return(
       <React.Fragment>
           <Search/>
            <div className="row">

                {loading
                ?   <p className="text-center">Загрузка...</p>
                
                    :
                users.map((user)=>{
                    return(
                        <div className="col-sm-4 mb-4" key={user.id}>
                        <Card user={user}/>
                    </div>
                    )
                })
            }
            </div>

   
           </React.Fragment>
    )
}