import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from './request.jsx'

function App() {
  const [data, setdata] = useState(0)

  useEffect(() => {
    first

    return () => {
      second
    }
  }, [third])


  return (
    <div>
      <h1 className='font-extrabold text-center mt-3'>Praha info</h1>

      <div className='ml-96'>
        <div className='ml-96'>
          <button className='bg-slate-600 font-serif text-gray-200 mb-5 rounded-xl p-5' onClick={ButtonAction}> click!</button>

        </div>
      </div>

      <div className='grid grid-cols-3 grid-rows-3 gap-7 bg-orange-500 max-w-5xl ml-72' >
        {/* využít route-color v celé tabulce */}

        {/* Route_long_name */}
        <div>020</div>
        {/* Route_shortgame_name */}
        <div>030</div>
        {/* Route-link */}
        <div>040</div>

      </div>
    </div>
  )
}



export default App
