import {Header} from './components/header/Header'
import {Home} from './components/home/Home'
import {About} from './components/about/About'
import {Skills } from './components/skills/Skills'
import {Qualification} from './components/qualification/Qualification'
import { Projeto } from './components/projetos/Projetos'
import {Contact} from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import './App.css'

function App() {

  return (
    <>
     <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
        <Projeto/>
        <Contact/>
      </main>
      <Footer/>
      
    </>
  )
}

export default App
