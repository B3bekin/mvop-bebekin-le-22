import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Comp from "./assets/component.jsx"

function App() {
  const [count, setCount] = useState(0)


  function addComponent() {
    setCount((c) => c + 1);
  }

  function removeComponent() {

    count > 0 ? setCount((c) => c - 1) : null;
    // pokud je to větší než 0, tak můžeme odebrat

  }

  return (
    <div className="">

      <div className="text-2xl py-6 text-center font-bold">
        React-dynamic components
      </div>

      <div className="flex justify-center py-10 gap-10">
        <div className='bg-green-700 text-white px-5 py-3 hover:shadow-2xl hover:bg-green-900 transition-all duration-200 rounded-full cursor-pointer'>
          {/* <button onClick={(addComponent)}> */}
          <button onClick={() => addComponent()}>
            Increase {count}
          </button>
        </div>

        <div className='bg-red-700 text-white px-5 py-3 hover:shadow-2xl hover:bg-red-900 transition-all duration-200 rounded-full cursor-pointer'>
          <button onClick={() => removeComponent()}>
            Decrease {count}
          </button>
        </div>
      </div>

      <div className='grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>


        {/* {console.log(Array.from(Array(count).keys())) } */}
        {/* vypíšeme do konzole, pole s počtem prvků count */}

        {count > 0 ? Array.from(Array(count).keys()).map(function () {
          return <Comp />
        }) : <div className='text-gray-400 font-thin text-3xl text-center'>Try pressing the buttons :)</div>}
        {/* pole se stejným počtem jako count, pro kařdý prvek vracíme komponentu */}

      </div>

    </div>
  )
}

export default App
