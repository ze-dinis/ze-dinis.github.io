import './App.css'
import NavBar from './NavBar'
import Body from './Body'
import Footer from './Footer'

export default function App() {

  return (
    <>
      <header className="App-header">
      <h1 className='welcome-msg'>Welcome to José Dinis' Portfolio</h1>
        <NavBar/>
      </header>
      <body>
        <Body />
      </body>
      <Footer />
    </>
  )
}
