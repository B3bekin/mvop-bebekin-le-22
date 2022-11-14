import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto md:container flex flex-col gap-8">

      {/* there should be big pink box. inside three containers with 3 different colours (green, red, blue)  */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum, alias suscipit impedit ipsa ipsum.
      </p>

      {/* <!-- green box --> */}
      <div className="container bg-green-500">
        <div className="bg-green-400">Grun, Grun , Grun ist alle maine klaider,</div>
        <div className="bg-green-600">Grun, Grun , Grun ist alles vas Ich hab</div>
      </div>

      {/* <!-- red box --> */}
      <div className="container first-letter:first-line:open:after:">
        <div className="bg-red-400">Rot, Rot , Rot ist alle maine klaider,</div>
        <div className="bg-red-600">Rot, Rot , Rot ist alles vas Ich hab</div>
      </div>

      {/* <!-- blue box --> */}
      <div className="container">
        <div className="bg-blue-400">Blau, Blau , Blau ist alle maine klaider,</div>
        <div className="bg-blue-600">Blau, Blau , Blau ist alles vas Ich hab</div>
      </div>


    </div>
  )
}

export default App
