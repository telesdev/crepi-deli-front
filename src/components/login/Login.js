import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './login.css'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <>
        <form>
            <div>
                <input type='email' placeholder='Insira seu email' value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div>
                <input type='password' placeholder='Insira sua senha' value={senha} onChange={e => setSenha(e.target.value)}></input>
            </div>
            <div>
                <Button>Entrar</Button>
                <Button onClick={e => alert(`Você digitou Email: '${email}' e Senha: '${senha}'`)}>Esqueci minha senha</Button>
            </div>
        </form>
        </>
    )
}