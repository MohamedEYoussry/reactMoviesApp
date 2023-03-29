import React from "react";
import { useContext } from "react";
import { langContext } from "../../Contexts/lang";
const Home =()=>{

    const {lang ,setLang} = useContext(langContext)
    const changLang=()=>{
        setLang(lang ==="EN"?"AR":"EN")
    }

    return (
        <div>   
            Languge : {lang} 
            <button onClick={()=>{changLang()}} className="btn btn-success">Toggle Languge</button>
        </div>
    )
}
export default Home