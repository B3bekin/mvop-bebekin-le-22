//Not IMPORTant, ha ha ha
// import Header from "./Aktuality"
import { Route, Routes } from "react-router-dom";

import FAQ from "./FAQ"
import Aktuality from "./Aktuality"
import Welcome from "./WelcomePage"
import Denicky from "./Galerie"
import News from "./Novinky";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/home" element={<Welcome />} />
        <Route path="/aktuality" element={<Aktuality />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/denicky" element={<Denicky />} />
        <Route path="/novinky" element={<News />} />
      </Routes>
    </div>

  )
}

export default App
