import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './signin.css'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
   <div className="container-center">
        <div className="login">
            <div className="login-area">
                <img src={logo} alt="" />
            </div>

            <form>
                <h1>Entrar</h1>
                <input 
                    type="text"
                    placeholder='E-mail'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                />

                <input 
                    type="password"
                    placeholder='Senha'
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                />

                <button type='submit'>Acessar</button>
            </form>

            <Link to='/register'>Criar uma conta</Link>
        </div>
   </div>
  )
}

export default SignIn