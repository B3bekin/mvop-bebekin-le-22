import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Posts from './Posts' 

const delay = (ms) => {
  console.log("start delay")
  return new Promise ((resolve) => {
    setTimeout(resolve, ms);
  })
}

function App() {
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(0)

  const handleOnClick = async () => {
    setLoading(true) ;

    console.log("Start handle on click");
    await delay(7000);
    console.log("After delay");
    setCount((count) => count + 3.14);
    console.log("Button event on click");
    setLoading(false);
  }

  const unhandleOnClick = async () => {
    console.log("Button event on click");
    setCount ((count) => count - 3.14);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={handleOnClick}>count is {count} </button>

        <button onClick={unhandleOnClick}>count is {count} </button>

        <button onClick={() => {
          
          setCount(0);
        }}>
        delete
        </button>
        
        <Posts/>
        
        {loading == true ? "Loading...." : null}

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Learn more about us
      </p>
    </div>
  )
}

export default App
