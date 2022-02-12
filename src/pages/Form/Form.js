import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useState} from 'react';
import { validateEmail , validatePassword} from '../../components/validate';
import Footer from '../Footer/Footer';
import './style.css';


export default function Form () {

    //adquirindo as informações dos campos 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pass, setPass] = useState('password')
    
    // Limpar os campos do formulário
    function clearFields (){
      document.getElementById('input-email').value="";
      document.getElementById('input-pass').value="";

   }

    // Validar o campo de email e senha com Regex e enviar os dados por console
    function sendData(e) {
        
        if (validateEmail(email) === false){
            alert('Ops: digite um e-mail válido')
        }else if (validatePassword(password) === false){
            alert('Ops: A sua senha deve ter no mínimo oito caracteres, incluindo uma letra maiúscula, um caractere especial e caracteres alfanuméricos')
        }else{
            console.log({email, password});
            clearFields();
        }
        
    }
    
    //visualizar a senha
    function viewPass (){
        setPass(pass === 'password' ? 'text' : 'password')
    }


    return (
    <div className="App">
      <div className='container'>
        <div className='logo-img'>
          <img src='https://www.xtrategie.com.br/wp-content/uploads/2019/08/logo_xtrategie.png' alt='logo xtrategie'/>
        </div>

        <div className='login'>
          <p className='title'>Faça seu login</p>
          <form className='form-login'>
            <input type="email" className='email' id='input-email' placeholder='E-mail' required onChange={e => setEmail(e.target.value)} /> 
            
            <span className='pass-icon'>
              <input type={pass} className='email' id='input-pass' placeholder='Senha' required onChange={e => setPassword(e.target.value)} />
              <VisibilityIcon className='icon-pass' onClick={viewPass}/>
            </span>
          
          
          </form>
          <button type="submit" className='button' onClick={sendData}>Entrar</button> 
          

        </div>
      </div>

      <Footer />
      
    </div>
    )
}