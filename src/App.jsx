import Header from './components/Header'
import Hero from './components/Hero'
import Items from './components/Items'
import Chatbox from './components/Chatbox'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />

        <main>
          <Hero />

          <Items />
        </main>

        <Chatbox />
      </div>
    </div>
  )
}

export default App
