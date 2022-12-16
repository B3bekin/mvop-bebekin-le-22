import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "./Post.jsx"
import Post from "./Post.jsx"


function App() {
  const [count, setCount] = useState(0)
  const [isPost,setIsPost] = useState(false);

  return (
    
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setIsPost((thisIsPost) => (!thisIsPost))}>
          count is {count}
        </button>
      </div>

      <div > {isPost ? <Post/>: null}</div>
         {/* podminka ?  true : false  */}


      <p className="read-the-docs">
        This should work well, I hope
      </p>
    </div>
  )
}

export default App
