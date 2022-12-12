import React from "react"
import { useEffect } from "react"
import { useState } from 'react'

function Post() {

    
    useEffect(() => {
        console.log("Komponenta načtena")
        //       Spusti se jakmile je tlacitko zmacknute

        makeRequest();
        //      věc co udělí dotaz
        console.log("Tuto zprávu uvidíte po zavolání MakeRequset aka dotaz")


        return () => {
            console.log("Komponenta odebráná 🎉")
        }

    });

    async function Rqst() {
        fetch=(https:jsonplaceholder.typicode.com/posts)


        return()=> {
            
        }


    }
    
    
    return (
        <div>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quod totam quia a modi atque. */}
            <pre>{JSON.stringify(Post, null, 2)}</pre>
        </div>

        
    )

}

export default Post