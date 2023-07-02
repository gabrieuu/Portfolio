import {Header} from './components/header/Header'
import {Home} from './components/home/Home'
import {About} from './components/about/About'
import './App.css'
function App() {

  return (
    <>
     <Header/>
      <main className="main">
        <Home/>
      </main>
      <About/>
    </>
  )
}

export default App
