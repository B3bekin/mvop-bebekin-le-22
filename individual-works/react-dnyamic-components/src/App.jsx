import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Comp from "./assets/component.jsx"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    addComponent(() => {
      setCount((c) => count + 1);
    });
  });

  useEffect(() => {
    removeComponent(() => {
      setCount((c) => count - 1);
    });
  });

  // const addComponent = function{
  //   setCount((c) = c + 1);
  // }

  // const removeComponent = function{
  //   setCount((c) = c - 1);
  // }

  return (
    <div className="">

      <div className="text-2xl py-6 text-center font-bold">
        React-dynamic components
      </div>

      <div className="flex justify-center py-10 gap-10">
        <div className='bg-green-700 text-white px-5 py-3 hover:shadow-2xl hover:bg-green-900 transition-all duration-200 rounded-full cursor-pointer'>
          {/* <button onClick={(addComponent)}> */}
          <button onClick={() => setCount((count) => count + 10)}>
            Increase {count}
          </button>
        </div>

        <div className='bg-red-700 text-white px-5 py-3 hover:shadow-2xl hover:bg-red-900 transition-all duration-200 rounded-full cursor-pointer'>
          <button onClick={() => setCount((count) => count - 10)}>
            Decrease {count}
          </button>
        </div>
      </div>



      <div className='grid grid-cols-4 gap-20 '>
        <Comp />
      </div>

    </div>
  )
}

export default App
