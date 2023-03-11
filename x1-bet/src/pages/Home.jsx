import React from 'react'
import { InputEntrar, Main, NavBar } from '../styles/HomeStyle'

const Home = () => {
  return (
    <Main>
        <NavBar>
          <a href="http://localhost:3000/">
            <img src="http://cambista.x1-betse.com/usuarios/getpic/26" alt="logo" width="205px"/>
          </a> 
          <div>
            <input type="text" name='login' id='login' placeholder='Login'/>
            <input type="password" name="password" id="password" placeholder='Senha' />
            <InputEntrar type="submit" value="Entrar" name='submit' id='submit' />
          </div> 
        </NavBar>
    </Main>
  )
}

export default Home