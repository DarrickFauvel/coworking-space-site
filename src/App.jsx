import Header from './components/Header'
import Hero from './components/Hero'
import Items from './components/Items'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <main>
          <Hero />

          <Items />
        </main>
      </div>
    </div>
  )
}

export default App
