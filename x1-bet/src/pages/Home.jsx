import React from 'react'
import { Header, InputEntrar, Main, SectionMain } from '../styles/HomeStyle'
import Logo from '../assets/logo.png'
import Slide1 from '../assets/slide1.png'
import Slide2 from '../assets/slide2.png'
import Slide3 from '../assets/slide3.png'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <Main>
        <Header>
          <a href="http://localhost:3000/">
            <img src={Logo} alt="logo" width="205px"/>
          </a> 
          <div>
            <input type="text" name='login' id='login' placeholder='Login'/>
            <input type="password" name="password" id="password" placeholder='Senha' />
            <InputEntrar type="submit" value="Entrar" name='submit' id='submit' />
          </div> 
        </Header>

        <SectionMain>
          <Carousel />
        </SectionMain>

    </Main>
  )
}

export default Home