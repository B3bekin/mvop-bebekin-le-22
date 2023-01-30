import { useEffect, useState } from 'react'
import axios from './request.jsx'

function App() {
  const [data, setData] = useState()
  const [stuff, setStuff] = useState
  const [loading, setLoading] = useState

  loading = async () => {

    try {
      loading = await axios.get('https://api.golemio.cz/v2/gtfs/routes?limit=30', headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlYmVraW4ubGUuMjAyMEBza29sYS5zc3BzLmN6IiwiaWQiOjE2NDMsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY3NDQ3NTM5OCwiZXhwIjoxMTY3NDQ3NTM5OCwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjkzNzA5NTU5LWExNzMtNDVlYS1hN2Y2LTU3NDBhNTE1ZTU0MSJ9.Mm8JUGAJlZ7Ed2fQoXRzlwlKvUni6VWURQzRROpvL_4'
      }), 
      
      data = loading

      setStuff(data)
      
    }
    // catch console.error(error);
  }

  useEffect(() => { loading() }, [])

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
