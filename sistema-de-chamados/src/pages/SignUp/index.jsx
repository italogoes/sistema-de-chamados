import {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../SignIn/signin.css'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e){
    e.preventDefault();

    if(name !== '' && password !== '' && email !== ''){
        alert('fazer cadastro')
    }
  }

  return (
   <div className="container-center">
        <div className="login">
            <div className="login-area">
                <img src={logo} alt="" />
            </div>

            <form onSubmit={handleSubmit}>
                <h1>Nova conta</h1>
                <input 
                    type="text"
                    placeholder='Nome'
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                />

                <input 
                    type="email"
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


                <button type='submit'>Cadastrar</button>
            </form>

            <Link to='/'>Já possui uma conta? Faça login</Link>
        </div>
   </div>
  )
}

export default SignUp