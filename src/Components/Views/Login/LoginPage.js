import Login from "./Login";
import { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { publicAxios } from "../../../Lib/apiClient";
import Loading from '../../UX/Loading/Loading'
const LoginPage = () =>{
    const {isLoading,errors} = useSelector((state)=>{return state.security})
    const dispatch = useDispatch();
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
            dispatch({
                type:'ON_LOGIN_LOADING',
                payload:{}
            })
            const data = await publicAxios.post(
                '/api/v1/seguridad/login',
                {
                    email:txtCorreo,
                    password:txtPassword
                }
            );
            console.log("Login Request: ",data)
            const {jwt:jwtToken,user} = data.data;
            dispatch({
                type:'ON_LOGIN_SUCCESS',
                payload:{
                    jwtToken,...user
                }
            })
        } catch (error) {
            console.log("Error on SignIn submit: ",error);
            dispatch({
                type:"ON_LOGIN_ERROR",
                payload:{errors:['Credenciales Incorrectas! ']}
            })
        }
    }
    const onCancel = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log("found")
    }

    return(
        <>
            {isLoading && <Loading/>}
            <Login
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

export default LoginPage;