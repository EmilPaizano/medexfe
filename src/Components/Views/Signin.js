import Page from "../UX/Page/Page"
import Input from "../UX/Forms/Input"
import { PrimaryButton, SecondaryButton } from "../UX/Forms/Button";
const Signin = (
    {
        txtCorreoValue, 
        txtPasswordValue, 
        onChange: onChangeHandler ,
        errorTxtCorreo,
        errorTxtPassword,
        onConfirmClick,
        onCancelClick}) =>{
    return (
        <Page header={(<h1>Crear Cuenta</h1>)}>
            <section>
                <Input        
                    label = "Correo Electronico"
                    type = "text"
                    name = "txtCorreo"
                    placeholder = "Su Correo Electronico"
                    value ={txtCorreoValue}
                    error = {errorTxtCorreo}
                    onChange = {onChangeHandler}
                />
                
                <Input        
                    label = "Contraseña"
                    type = "password"
                    name = "txtPassword"
                    placeholder = "Su Contraseña"
                    value ={txtPasswordValue}
                    error = {errorTxtPassword}
                    info="Minimo 8 caracteres, minusculas, mayusculas y numeros"
                    onChange={onChangeHandler}
                />

                <PrimaryButton onClick = {onConfirmClick}>
                    Crear Cuenta
                </PrimaryButton>
                <SecondaryButton onClick ={onCancelClick}>
                    Tengo Cuenta
                </SecondaryButton>

                
            </section>
            
        </Page>
    )
}

export default Signin;