import Signin from "./Signin";
import { useState } from "react";
import { publicAxios } from "../../Lib/apiClient";

const SigninPage = () =>{
    const [txtCorreo,setTxtCorreo] = useState("");
    const [txtPassword,setTxtPassword] = useState("");

    const onChangeHandler =({target:{name,value}})=>{
        switch(name){
            case "txtCorreo": 
                setTxtCorreo(value);
                break;
            case "txtPassword":
                setTxtPassword(value);
                break;
        }
    }

    const onConfirm = async(e)=>{
        e.preventDefault();
        e.stopPropagation();
        try {
            const data = await publicAxios.post(
                '/api/v1/seguridad/signin',
                {
                    email:txtCorreo,
                    password:txtPassword
                }
            );
            console.log("signin Request: ",data)                
        } catch (error) {
            console.log("Error on SignIn submit: ",error);
        }
    }
    const onCancel = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log("found")
    }

    return(
        <>
            <Signin
                txtCorreoValue={txtCorreo}
                txtPasswordValue ={txtPassword}
                onChange ={onChangeHandler}
                errorTxtCorreo=""
                errorTxtPassword=""
                onConfirmClick={onConfirm}
                onCancelClick={onCancel}
            />
             {/* <hr/>
            {`${txtCorreo}-${txtPassword}`} */}
        </>
       
    )
}

export default SigninPage