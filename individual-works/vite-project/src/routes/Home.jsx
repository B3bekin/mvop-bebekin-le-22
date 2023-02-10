import axios from 'axios';
import { useState, useEffect } from 'react';
import RouteItem from '../assets/components/RouteItem';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

    //prázdná proměnná traficdata, 
  const [trafficData, setTrafficData] = useState()

  //funkce je asynchronní, protože chceme aby počkala 
  async function getData() {

    let response = await axios({
      method: 'get',
      url: 'https://api.golemio.cz/v2/gtfs/routes?limit=30',
      headers: { 'X-Access-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlYmVraW4ubGUuMjAyMEBza29sYS5zc3BzLmN6IiwiaWQiOjE2NDMsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY3NDQ3NTM5OCwiZXhwIjoxMTY3NDQ3NTM5OCwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjkzNzA5NTU5LWExNzMtNDVlYS1hN2Y2LTU3NDBhNTE1ZTU0MSJ9.Mm8JUGAJlZ7Ed2fQoXRzlwlKvUni6VWURQzRROpvL_4' }
    });

    setTrafficData(response.data);
  }

  //reaguje na změnu ==> v našem případě volá funkci getData
  useEffect(() => {
    getData();

    //pokud v [] nic není, tak pracuje na každý render stránky
  }, []);

  //  useEffect(() => {
  //   console.log(trafficData);
  // }, [trafficData]) 

  return (
    <div className="bg-white flex flex-col items-center p-12">

      {/* operace if else === ? : */}
      
      {/* operace podmínky, v našem případě jen na dva stavy: buď loading nebo grid */}
      {trafficData === undefined ?
        <div>loading..</div> :
        <div className='grid grid-cols-3 gap-12'>
          {
            // iterace pro výpis položek z pole
            // iterace ==> něco co platí pro všechny prvky v poli
            trafficData.map((element) => {
              return <RouteItem
                route_short_name={element.route_short_name}
                route_long_name={element.route_long_name}
                route_bg_color={element.route_color}
                route_color={element.route_text_color}
                route_url={element.route_url}
              />
            })
          }
        </div>}
    </div>
  )
}

export default App
